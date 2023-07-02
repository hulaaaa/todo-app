import'./List.scss'

const List = ({ items }) => {
    return(
        <ul className="list">
            {items.map(obj=>(
                <li className={obj.active? 'select': null}>
                    <i>
                        {obj.icon ? (obj.icon) : (<i className={`badge badge--${obj.color}`}></i>)}
                    </i>
                    <span>{obj.label}</span>
                </li>
            ))}
        </ul>
    )
}
export default List;
