

export function DataGrid(props){

    return(
        <table className="table caption-top text-center table-hover">
            <caption className="text-center fw-bold h5 text-secondary">{props.caption}</caption>
            <thead>
                <tr>
                    {
                        Object.keys(props.data[0]).map(key=> <th key={key}>{key}</th>)
                    }
                    <th>
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map(item =>
                        <tr key={item}>
                            {
                                Object.keys(item).map(key=> <td key={key}>{item[key]}</td>)
                            }
                            <td>
                                <button className="btn btn-danger bi bi-trash"></button>
                                <button className="btn btn-warning mx-2 bi bi-pen"></button>
                                <button className="btn btn-primary bi bi-eye"></button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}