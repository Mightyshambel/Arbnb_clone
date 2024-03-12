export default function Card(props) {
  return (
    <div className="px-20">
      <img
        src={props.img}
        className="rounded-lg "
        alt="katie swimming"
      />
      <div className="flex text-sm">
        <img className="rounded-md w-4 h-4" src="star.png" alt="icon" />
        <span className="text-gray-400">{props.rating}</span>
        <span className="text-gray-400">• {props.outof} </span>
        <span className="text-gray-400">{props.country}</span>
      </div>
      <div className="text-sm">
        <h2>{props.desc}</h2>
        <p>
          <span className="font-bold">{props.money}</span>/person
        </p>
      </div>
    </div>
  );
}
