export function Link({ openInNewTab }: { openInNewTab: string }) {
	return (
		<a href='https://react.dev/' target={openInNewTab}>
			React Docs
		</a>
	);
}
