import { Priority } from "../../types/Todo";

type PriorityFilterProps = {
    filter: Priority;
    setFilter: (filter: Priority) => void;
}



const PriorityFilter = () => {
    const priorityOptions: Priority[] = ['High', 'Medium', 'Low', 'None', 'Complete'];

    return (
        <select value="test"  >
            {priorityOptions.map((priority, index) => (
                <option key={index} value={priority}>
                    {priority}
                </option>
            ))}
        </select>
    );
    }

    export default PriorityFilter;
