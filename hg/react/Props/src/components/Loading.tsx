import { Title } from './Title';
import { Text } from './Text';
import { List } from './List';
import { Link } from './Link';

export default function Loading({ show }: { show: boolean }) {
	if (show) {
		return (
			<>
				<Title />
				<Text />
				<List />
				{/*  "openInNewTab"={_self}: to open in the same window  */
				/*  "openInNewTab" ={_blank}: to open in a new window  */}
				<Link openInNewTab={'_self'} />
			</>
		);
	} else {
		return 'Loading components...';
	}
}
