const Card = ({ name, value, lastUpdated, optimalValue }) => {
    return (
        <>
            <div className="flex flex-col gap-2 bg-red-200 p-5">
                <div>{name}</div>
                <div>Current Value: {value}</div>
                <div>Last Updated: {lastUpdated}</div>
                <div>Optimal Value: {optimalValue}</div>
            </div>

        </>
    )
}

export default Card