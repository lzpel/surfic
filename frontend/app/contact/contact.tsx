"use client";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Article, { ArticleInheritedProps } from "@/app/Article";
export default function Contact(props: ArticleInheritedProps){
	const [form, setForm] = React.useState({
		company: "",
		department: "",
		name: "",
		phone: "",
		email: "",
		url: "",
		message: "",
		agree: false,
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm((prev) => ({ ...prev, agree: e.target.checked }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!form.phone || !form.email || !form.agree) {
			alert("必須項目を入力してください。");
			return;
		}
		console.log(form);
		alert("送信されました！");
	};

	return <Article title="お問い合わせ" link="/contact" {...props}>
		サーフィック合同会社へのお問い合わせ、見積もり依頼は、以下のフォームからお気軽にお寄せ下さい。弊社担当者が後程折り返しご連絡させていただきます。
		<Box component="form" onSubmit={handleSubmit}>
		<Typography variant="h5" gutterBottom>
			メールでのお問い合わせ
		</Typography>
		下記メールフォームの必要事項にご入力いただき、送信ボタンをクリックしてください。
		必須項目につきましては必ず入力くださいますよう、お願いいたします。

		<TextField
			label="貴社名"
			name="company"
			value={form.company}
			onChange={handleChange}
			fullWidth
			margin="normal"
		/>
		<TextField
			label="部署名"
			name="department"
			value={form.department}
			onChange={handleChange}
			fullWidth
			margin="normal"
		/>
		<TextField
			label="担当者お名前"
			name="name"
			value={form.name}
			onChange={handleChange}
			fullWidth
			margin="normal"
		/>
		<TextField
			label="電話番号 *"
			name="phone"
			value={form.phone}
			onChange={handleChange}
			fullWidth
			required
			margin="normal"
		/>
		<TextField
			label="メールアドレス *"
			name="email"
			type="email"
			value={form.email}
			onChange={handleChange}
			fullWidth
			required
			margin="normal"
		/>
		<TextField
			label="URL"
			name="url"
			value={form.url}
			onChange={handleChange}
			fullWidth
			margin="normal"
		/>
		<TextField
			label="お問い合わせ内容"
			name="message"
			value={form.message}
			onChange={handleChange}
			fullWidth
			multiline
			rows={4}
			margin="normal"
		/>

		<FormGroup>
			<FormControlLabel
			control={
				<Checkbox checked={form.agree} onChange={handleCheckbox} name="agree" required />
			}
			label="個人情報の取扱規定に同意します"
			/>
		</FormGroup>

		<Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
			送信
		</Button>
		</Box>
	</Article>
}
