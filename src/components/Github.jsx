import { useEffect, useState } from 'react';

function Github() {
    const [data, setData] = useState({});

    useEffect(()=>{
        fetch("https://api.github.com/users/hrajput0322")
        .then((res)=>res.json())
        .then((res)=> setData(res))
        .catch((err)=>console.log(err));
    }, []);

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                    <h2>GitHub Profile</h2>
                    {data.avatar_url && <img src={data.avatar_url} alt="Profile" className="rounded-circle" width="150" />}
                    <h3>{data.name}</h3>
                    <p>{data.bio}</p>
                    <p><strong>Public Repositories:</strong> {data.public_repos}</p>
                </div>
            </div>
        </div>
    );
}

export default Github;
