import profileImg from '../assets/dog-profile.jpg';

export default function Header() {
	return (
		<header className="w-full flex items-center justify-center gap-[60vw] bg-transparent h-16">
			<div className="h-full flex items-center gap-3">
				<div className="bg-primary h-[78%] aspect-square rounded-lg relative" >
          <div className="rounded-full bg-white w-3 aspect-square absolute top-3 left-2 "/>
          <div className="rounded-full bg-white w-3 aspect-square absolute top-3 right-2 "/>
        </div>
				<p className="text-xl font-semibold">Mood tracker</p>
			</div>

			<div className="h-full flex items-center gap-2">
				<img className="h-[80%] aspect-square rounded-full" src={profileImg}/>
				<button className="h-[90%] font-semibold text-blue-900 cursor-pointer">v</button>
			</div>
		</header>
	);
}
