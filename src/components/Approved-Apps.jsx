export const Approved = () => {
    return(
        <>
                 <main>
                    <h1> Approved Applications</h1>
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
                        <td>Ayoub Lamini</td>
                        <td>1</td>
                        <td>14/03/2023</td>
                        <td>5 days</td>
                        <td className='success'>Approved</td>
                    </tr>
                    <tr  className='table-rows' >
                        <td>Dinzel Washington</td>
                        <td>2</td>
                        <td>15/03/2023</td>
                        <td>9 days</td>
                        <td className='success'>Approved</td>
                    </tr>
                </tbody>
            </table>
        </div>
                    </div>
                </main>
                
    
                </>
        
    );
}