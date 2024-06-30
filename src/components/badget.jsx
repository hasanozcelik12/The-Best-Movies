const Badges = ({ title, list, color }) => {
  return (
    <div>
      <h5>{title}</h5>

      {list.map((item, index) => (
        <p key={index} className={`badge ${color} mr-2 mb-3`}>{item.name}</p>
      ))}
    </div>
  );
};

export default Badges;