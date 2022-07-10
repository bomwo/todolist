import * as React from 'react'

import { User } from '../interfaces'

type ListDetailProps = {
    item: User
}

const ListDetail = ({ item: user}: ListDetailProps) => (
    <div>
        <h1>Detail from {user.name}</h1>
        <p>Id: {user.id}</p>
    </div>
)

export default ListDetail
