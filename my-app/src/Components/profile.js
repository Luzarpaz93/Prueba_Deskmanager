
import React from 'react';

export default function Profile() {
    const user = JSON.parse(localStorage.getItem('user'));

    return(<div>
        Welcome {user.id} {user.id}
        </div>

    )    
}