const promClient = require('prom-client');

const prometheus = new promClient.Prometheus('http://prometheus.endpoint:9090'); 

async function fetchDataFromPrometheus() {
    try {
        const result = await prometheus.query({
            query: 'some_metric_name{job="example_job"}', 
            start: Date.now() - 3600000, 
            end: Date.now() 
        });
        
        console.log('Result:', result); 
    } catch (error) {
        console.error('Error fetching data from Prometheus:', error);
    }
}

fetchDataFromPrometheus();
