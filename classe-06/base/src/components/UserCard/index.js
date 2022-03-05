import './style.css';

export default function UserCard({
    avatar,
    name,
    userName,
    followers,
    following
}) {
    return (
        <div className='user-card'>
            <div
                className="avatar"
                style={{
                    backgroundImage: `url(${avatar})`
                }}
            />
            <h3>{name}</h3>
            <span className='username'>{userName}</span>
            <div className='container-follow'>
                <span>{followers}</span>
                <span>seguidores</span>
            </div>
            <div className='container-follow'>
                <span>{following}</span>
                <span>seguindo</span>
            </div>
        </div>
    )
}