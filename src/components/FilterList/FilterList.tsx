import PriorityFilter from "../PriorityFilter/PriorityFilter";
import { Priority, Todo } from "../../types/Todo";
import FilterItem from "../FilterItem/FilterItem";
import { ChangeEvent, useState } from "react";

type FilterListProps = {
    todos: Todo[];
    setFilteredList: (todos: Todo[]) => void;
}

const FilterList = ( {todos, setFilteredList}: FilterListProps ) => {
    const [priorityFilter, setPriorityFilter] = useState<Priority>('None')
    const [dateFilter, setDateFilter] = useState<boolean>(false)

    const priorityValues = {
        'None': 0,
        'Complete': 1,
        'Low': 2,
        'Medium': 3,
        'High': 4
    }
    
    const applyFilters = () => {
        const filteredTodos = [...todos]
        if (priorityFilter) {
            filteredTodos.sort((a, b) => priorityValues[a.priority] - priorityValues[b.priority])
        }
        if (dateFilter) {
            filteredTodos.sort((a, b) => a.timeStamp.getTime() - b.timeStamp.getTime())
        }

        setFilteredList(filteredTodos)
    }

    const handlePriorityFilter = (event: ChangeEvent<HTMLInputElement>) => {
        setPriorityFilter(event.currentTarget.value as Priority)
        applyFilters()
    }

    const handleDateFilter = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.currentTarget.checked) {
            setDateFilter(true)
        } else {
            setDateFilter(false)
        }
        applyFilters()

    }

    return (
        <div>
            <FilterItem value='Date' label='Date' onChange={handleDateFilter} />
            <FilterItem value='Priority' label='Priority' onChange={handlePriorityFilter} />
        </div>
    );
};

export default FilterList;
