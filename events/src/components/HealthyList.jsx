import HealthyListItem from "./HealthyListItem";

const HealthyList = ({listItem}) => {
    return(
        <ul className="healthyList">
            <HealthyListItem items={listItem}></HealthyListItem>
        </ul>
    )
}

export default HealthyList;