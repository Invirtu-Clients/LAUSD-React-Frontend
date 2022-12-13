import { ga } from "react-ga";
import { Link } from "react-router-dom";
import Navigate from "../../../../../util/Navigate";


export default function CompetitionBrackets({ tournament, is_admin }) {


    let updateLink = '';

    if (is_admin) {

    }

    return (
        <div >
            <main id="tournament">
                {tournament && tournament.rounds && tournament.rounds.map(function (round, index) {

                    let currentBracket = 0;

                    let currentRound = round.round;

                    let hasPlacedTop=false;

                    return (
                        <ul className={'round round-' + (index + 1)} key={index}>
                            <li className="text-center">
                                <h5>Round {index + 1}</h5>
                                <Link to={Navigate.tournamentsRoundBracketsCreate(round.competition_id, round.round)} className="btn btn-primary btn-sm">Add Bracket</Link>
                            </li>

                            {round.brackets && round.brackets.map(function (bracket, index) {

                                let competitor_name = '';

                                if (bracket.user) {
                                    competitor_name = bracket.user.username;
                                }

                                let competitorClass = '';
                                let gameSpacer = '';

                                if(hasPlacedTop == false) {
                                    competitorClass = 'game game-top';
                                    gameSpacer = <li className="game game-spacer pt-1"> <small>Round {round.round} Bracket {bracket.bracket}</small></li>

                                } else {
                                    competitorClass = 'game game-bottom';
                                }

                                if(bracket.is_winner) {
                                    competitorClass += ' winner';
                                }

                                hasPlacedTop = true;
                                return (
                                    <>
                                        <li className={competitorClass}>{competitor_name} <span>{bracket.points_awarded}</span></li>
                                        {gameSpacer}
                                    </>
                                );
                            })}


                        </ul>
                    );
                })}
            </main>
            <main id="tournament">
                <ul className="round round-1">
                    <li className="text-center"><Link className="btn btn-primary btn-sm">Round 1 Add Bracket</Link></li>
                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top winner">Lousville <span>79</span></li>
                    <li className="game game-spacer">&nbsp; <Link className="btn btn-primary btn-sm small">Update Bracket</Link></li>
                    <li className="game game-bottom ">NC A&T <span>48</span></li>

                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top winner">Colo St <span>84</span></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom ">Missouri <span>72</span></li>

                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top ">Oklahoma St <span>55</span></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom winner">Oregon <span>68</span></li>

                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top winner">Saint Louis <span>64</span></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom ">New Mexico St <span>44</span></li>

                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top winner">Memphis <span>54</span></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom ">St Mary's <span>52</span></li>

                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top winner">Mich St <span>65</span></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom ">Valparaiso <span>54</span></li>

                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top winner">Creighton <span>67</span></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom ">Cincinnati <span>63</span></li>

                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top winner">Duke <span>73</span></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom ">Albany <span>61</span></li>

                    <li className="spacer">&nbsp;</li>
                </ul>
                <ul className="round round-2">

                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top winner">Lousville <span>82</span></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom ">Colo St <span>56</span></li>

                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top winner">Oregon <span>74</span></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom ">Saint Louis <span>57</span></li>

                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top ">Memphis <span>48</span></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom winner">Mich St <span>70</span></li>

                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top ">Creighton <span>50</span></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom winner">Duke <span>66</span></li>

                    <li className="spacer">&nbsp;</li>
                </ul>
                <ul className="round round-3">
                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top winner">Lousville <span>77</span></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom ">Oregon <span>69</span></li>

                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top ">Mich St <span>61</span></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom winner">Duke <span>71</span></li>

                    <li className="spacer">&nbsp;</li>
                </ul>
                <ul className="round round-4">
                    <li className="spacer">&nbsp;</li>

                    <li className="game game-top winner">Lousville <span>85</span></li>
                    <li className="game game-spacer">&nbsp;</li>
                    <li className="game game-bottom ">Duke <span>63</span></li>

                    <li className="spacer">&nbsp;</li>
                </ul>
            </main>




        </div>
    );
}