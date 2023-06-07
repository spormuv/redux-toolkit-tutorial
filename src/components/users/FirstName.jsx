import { useSelector } from 'react-redux';

const FirstName = () => {
  const { user } = useSelector(state => state);

  return <div className="font-bold">{user.firstName}</div>;
};

export default FirstName;
