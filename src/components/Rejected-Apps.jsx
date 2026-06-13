export const Rejected = () => {
    return(
        <>
                 <main>
                    <h1> Rejected Applications</h1>
                    <div className="recent-applications">
                    <div className="applications">
               <table>
                <thead>
                    <tr >
                        <th>Student</th>
                        <th>App Number</th>
                        <th>Date</th>
                        <th>Duration</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr  className='table-rows' >
                        <td>Saber Dani</td>
                        <td>1</td>
                        <td>07/12/2022</td>
                        <td>20 days</td>
                        <td className='danger'>Rejected</td>
                    </tr>
                    <tr  className='table-rows' >
                        <td>Alexa botellas</td>
                        <td>2</td>
                        <td>24/08/2022</td>
                        <td>14 days</td>
                        <td className='danger'>Rejected</td>
                    </tr>
                </tbody>
            </table>
        </div>
                    </div>
                </main>
                
    
                </>
        
    );
}