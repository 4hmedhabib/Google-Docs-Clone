import Icon from '@material-tailwind/react/Icon';
import { Fragment } from 'react';

const DocumentRow = ({ id, fileName, date }) => {
	console.log(id);
	return (
		<Fragment>
			{console.log('Running Document Row')}
			<Icon name="article" size="3xl" color="blue" />
			<p className="flex-grow pl-5 w-10 pr-10 truncate">{fileName}</p>
			<p className="pr-5 text-sm">{date && date.toDate().toLocaleDateString()}</p>
		</Fragment>
	);
};

export default DocumentRow;
