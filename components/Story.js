
export default function Story({img, username}){
    return(
        <div className="">
            <img src={img} alt={username} />
            <p>{username}</p>

        </div>
    )
}