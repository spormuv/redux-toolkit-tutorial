import { useSelector } from 'react-redux';

const LastName = () => {
  const { user } = useSelector(state => state);

  return <div className="font-bold">{user.lastName}</div>;
};

export default LastName;
