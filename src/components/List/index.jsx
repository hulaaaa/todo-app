import'./List.scss'
import classNames from 'classnames';
const List = ({ items , isRemovable}) => {
    return(
        <ul className="list">
            {items.map((obj,index)=>(
                <li key={index} className={classNames(obj.className,{'select':obj.active})}>
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
