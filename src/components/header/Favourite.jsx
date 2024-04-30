import FavIcon from "../../assets/heart.svg";

export default function Favourite({ onShow }) {
  return (
    <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all text-white">
      <img src={FavIcon} alt="" />
      <span onClick={onShow}>Favourite Locations</span>
    </div>
  );
}
