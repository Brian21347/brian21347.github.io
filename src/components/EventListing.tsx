export default function EventListing(props: any) {
    const alt = props.time;
    const eventName = props.eventName;
    const link = props.link;
    const role = props.role;
    const time = props.time;
    const description = props.description;

    return (
        <div className="flex items-center text-slate-800">
            <img src={props.src} alt={alt} className="rounded-xl w-[10rem]"/>
            
            <div className="bg-white bg-opacity-50 rounded-lg p-2">
                <a href={link} className="hover:text-sky-800 font-bold">
                    {eventName}
                </a>
            <p className="text-slate-500">{role}, <i>{time}</i></p>
            <br/>
            <p>{description}</p>
            </div>
        </div>
    )
}