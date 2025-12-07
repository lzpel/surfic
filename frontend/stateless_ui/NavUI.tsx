import React from "react";

type NavUIProps = {
	children: React.ReactElement | React.ReactElement[];
	container?: React.ComponentType<{ children: React.ReactNode }>;
	className?: string;
};

const NavBarPadding: React.FC<
	React.HTMLAttributes<HTMLDivElement>
> = ({ className = "", children, ...rest }) => {
	return (
		<div
			className={`flex h-full items-center ${className}`}
			{...rest}
		>
			{children}
		</div>
	);
};

const DefaultContainer: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => (
	<div className="mx-auto h-full w-full max-w-6xl px-4">
		{children}
	</div>
);

const is_logo_key = (elem: React.ReactElement) =>
	elem.key && String(elem.key).includes("logo");

const NavUI: React.FC<NavUIProps> = (props) => {
	const { container: Container = DefaultContainer, children, className = "" } =
		props;

	const childrenArray = React.Children.toArray(
		children
	) as React.ReactElement[];

	const logoChildren = childrenArray.filter(is_logo_key);
	const otherChildren = childrenArray.filter((v) => !is_logo_key(v));

	return (
			<Container>
				{/* ← ここで必ず flex 一行にする */}
				<div className="flex h-full w-full items-center flex-nowrap overflow-hidden">
					{logoChildren.length > 0 && (
						<NavBarPadding className="shrink-0">
							{logoChildren}
						</NavBarPadding>
					)}

					{/* 縦の仕切り線 */}
					<div className="mx-4 h-8 w-px shrink-0 bg-slate-200/80" />

					{otherChildren.length > 0 && (
						<NavBarPadding className="ml-auto justify-end gap-4 min-w-0">
							{otherChildren}
						</NavBarPadding>
					)}
				</div>
			</Container>
	);
};

export default NavUI;