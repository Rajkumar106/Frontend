


const Content=(props) => {

  return ( 
    <div>
      <table>
        <tbody className="table-content">
          <tr>
            <th>Name</th>
            <th>Location</th>
          </tr>
          <tr>
            <td>{props.name}</td>
            <td>{props.location}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Content;
