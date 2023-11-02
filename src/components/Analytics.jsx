import Card from "./Card"

const Analytics = () => {
    return (
        <>


        <div className="flex gap-16 items-center justify-center mt-12">

            <Card name="ph level" value="100" lastUpdated="12:00:00 12/02/2023" optimalValue="100"/>
            <Card name="tds level" value="100" lastUpdated="12:00:00 12/02/2023" optimalValue="100"/>
            <Card name="temperature" value="100" lastUpdated="12:00:00 12/02/2023" optimalValue="100"/>
            <Card name="nutrient level" value="100" lastUpdated="12:00:00 12/02/2023" optimalValue="100"/>
        </div>

        </>
    )
}

export default Analytics