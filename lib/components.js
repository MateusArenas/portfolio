
function buildData (data, colluns) {
    if (!colluns) return data;
    return data.reduce((resultArray, item, index) => { 
        const chunkIndex = Math.floor(index/colluns)

        if(!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [] // start a new chunk
        }

        resultArray[chunkIndex].push(item)

        return resultArray
    }, [])
}

function List ({ component, data, item, section, colluns }) {
    if (section && colluns) {
        const childrens = buildData(data, colluns).map(data => data.map(props => item({ ...props })))
    
        return component({ 
            children: childrens.map(props => section({ ...props }))
        });
    }

    return component({ 
        children: buildData(data, colluns).map(props => item({ ...props })) 
    });
}

module.exports = { List };