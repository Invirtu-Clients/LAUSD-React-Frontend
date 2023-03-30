import { Link } from "react-router-dom";
import Navigate from "../../../../../util/Navigate";



export default function TeamItem({ team, is_admin }) {


    let updateLink = '';

    if (is_admin) {
        updateLink = <Link to={Navigate.tournamentsteamsUpdate(team.competition_id, team.id)} className="btn btn-warning">Update</Link>;
    }

    return (
        <>
            {(team) ?
                <div >
                    {updateLink}

                    <h3>{team.title}</h3>

                    <strong><p className="lead">{team.description}</p></strong>

                    
                </div>
                : ''}
        </>

    );
}