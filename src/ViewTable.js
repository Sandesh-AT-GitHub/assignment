import React from "react";
import {Table} from "react-bootstrap";

function ViewTable(props) {
  return (
    <div className="viewData">
      <Table bordered responsive>
        <tbody>
          <tr>
            <td>flight_number</td>
            <td>{props.eachData.flight_number}</td>
          </tr>
          <tr>
            <td>mission_name</td>
            <td>{props.eachData.mission_name}</td>
          </tr>
          <tr>
            <td>mission_id</td>
            <td>{props.eachData.mission_id}</td>
          </tr>
          <tr>
            <td>upcoming</td>
            <td>{props.eachData.upcoming}</td>
          </tr>
          <tr>
            <td>launch_year</td>
            <td>{props.eachData.launch_year}</td>
          </tr>
          <tr>
            <td>launch_date_unix</td>
            <td>{props.eachData.launch_date_unix}</td>
          </tr>
          <tr>
            <td>launch_date_utc</td>
            <td>{props.eachData.launch_date_utc}</td>
          </tr>
          <tr>
            <td>launch_date_local</td>
            <td>{props.eachData.launch_date_local}</td>
          </tr>
          <tr>
            <td>is_tentative</td>
            <td>{props.eachData.is_tentative}</td>
          </tr>
          <tr>
            <td>tentative_max_precision</td>
            <td>{props.eachData.tentative_max_precision}</td>
          </tr>
          <tr>
            <td>tbd</td>
            <td>{props.eachData.tbd}</td>
          </tr>
          <tr>
            <td>launch_window</td>
            <td>{props.eachData.launch_window}</td>
          </tr>
          <tr>
            <td>rocket</td>
            <td>
                <tr>
                    <td>rocket_id</td>
                    <td>{props.eachData.rocket.rocket_id}</td>
                </tr>
                <tr>
                    <td>rocket_name</td>
                    <td>{props.eachData.rocket.rocket_name}</td>
                </tr>
                <tr>
                    <td>rocket_type</td>
                    <td>{props.eachData.rocket_type}</td>
                </tr>
                <tr>
                    <td>first_stage</td>
                    <td>
                        <tr>
                            <td>cores</td>
                            <td>
                                <tr>
                                    <td>core_serial</td>
                                    <td>{props.eachData.rocket.first_stage.cores[0].core_serial}</td>
                                </tr>
                                <tr>
                                    <td>flight</td>
                                    <td>{props.eachData.rocket.first_stage.cores[0].flight}</td>
                                </tr>
                                <tr>
                                    <td>block</td>
                                    <td>{props.eachData.rocket.first_stage.cores[0].block}</td>
                                </tr>
                                <tr>
                                    <td>gridfins</td>
                                    <td>{props.eachData.rocket.first_stage.cores[0].gridfins}</td>
                                </tr>
                                <tr>
                                    <td>legs</td>
                                    <td>{props.eachData.rocket.first_stage.cores[0].legs}</td>
                                </tr>
                                <tr>
                                    <td>reused</td>
                                    <td>{props.eachData.rocket.first_stage.cores[0].reused}</td>
                                </tr>
                                <tr>
                                    <td>land_success</td>
                                    <td>{props.eachData.rocket.first_stage.cores[0].land_success}</td>
                                </tr>
                                <tr>
                                    <td>landing_intent</td>
                                    <td>{props.eachData.rocket.first_stage.cores[0].landing_intent}</td>
                                </tr>
                                <tr>
                                    <td>landing_type</td>
                                    <td>{props.eachData.rocket.first_stage.cores[0].landing_type}</td>
                                </tr>
                                <tr>
                                    <td>landing_vehicle</td>
                                    <td>{props.eachData.rocket.first_stage.cores[0].landing_vehicle}</td>
                                </tr>
                                
                            </td>
                        </tr>
                    </td>
                </tr>
                <tr>
                    <td>second_stage</td>
                    <td>
                        <tr>
                            <td>block</td>
                            <td>{props.eachData.rocket.second_stage.block}</td>
                        </tr>
                        <tr>
                            <td>payloads</td>
                            <td>
                                <tr>
                                    <td>payload_id</td>
                                    <td>{props.eachData.rocket.second_stage.payloads[0].payload_id}</td>
                                </tr>
                                <tr>
                                    <td>norad_id</td>
                                    <td>{props.eachData.rocket.second_stage.payloads[0].norad_id[0]}</td>
                                </tr>
                                <tr>
                                    <td>reused</td>
                                    <td>{props.eachData.rocket.second_stage.payloads[0].reused}</td>
                                </tr>
                                <tr>
                                    <td>customers</td>
                                    <td>{props.eachData.rocket.second_stage.payloads[0].customers[0]}</td>
                                </tr>
                                <tr>
                                    <td>nationality</td>
                                    <td>{props.eachData.rocket.second_stage.payloads[0].nationality}</td>
                                </tr>
                                <tr>
                                    <td>manufacturer</td>
                                    <td>{props.eachData.rocket.second_stage.payloads[0].manufacturer}</td>
                                </tr>
                                <tr>
                                    <td>payload_type</td>
                                    <td>{props.eachData.rocket.second_stage.payloads[0].payload_type}</td>
                                </tr>
                                <tr>
                                    <td>payload_mass_kg</td>
                                    <td>{props.eachData.rocket.second_stage.payloads[0].payload_mass_kg}</td>
                                </tr>
                                <tr>
                                    <td>payload_mass_lbs</td>
                                    <td>{props.eachData.rocket.second_stage.payloads[0].payload_mass_lbs}</td>
                                </tr>
                                <tr>
                                    <td>orbit</td>
                                    <td>{props.eachData.rocket.second_stage.payloads[0].orbit}</td>
                                </tr>
                                <tr>
                                    <td>orbit_params</td>
                                    <td>
                                        <tr>
                                            <td>reference_system</td>
                                            <td>{props.eachData.rocket.second_stage.payloads[0].orbit_params.reference_system}</td>
                                        </tr>
                                        <tr>
                                            <td>regime</td>
                                            <td>{props.eachData.rocket.second_stage.payloads[0].orbit_params.regime}</td>
                                        </tr>
                                        <tr>
                                            <td>longitude</td>
                                            <td>{props.eachData.rocket.second_stage.payloads[0].orbit_params.longitude}</td>
                                        </tr>
                                        <tr>
                                            <td>semi_major_axis_km</td>
                                            <td>{props.eachData.rocket.second_stage.payloads[0].orbit_params.semi_major_axis_km}</td>
                                        </tr>
                                        <tr>
                                            <td>eccentricity</td>
                                            <td>{props.eachData.rocket.second_stage.payloads[0].orbit_params.eccentricity}</td>
                                        </tr>
                                        <tr>
                                            <td>periapsis_km</td>
                                            <td>{props.eachData.rocket.second_stage.payloads[0].orbit_params.periapsis_km}</td>
                                        </tr>
                                        <tr>
                                            <td>apoapsis_km</td>
                                            <td>{props.eachData.rocket.second_stage.payloads[0].orbit_params.apoapsis_km}</td>
                                        </tr>
                                        <tr>
                                            <td>inclination_deg</td>
                                            <td>{props.eachData.rocket.second_stage.payloads[0].orbit_params.inclination_deg}</td>
                                        </tr>
                                        <tr>
                                            <td>lifespan_years</td>
                                            <td>{props.eachData.rocket.second_stage.payloads[0].orbit_params.lifespan_years}</td>
                                        </tr>
                                        <tr>
                                            <td>epoch</td>
                                            <td>{props.eachData.rocket.second_stage.payloads[0].orbit_params.epoch}</td>
                                        </tr>
                                        <tr>
                                            <td>mean_motion</td>
                                            <td>{props.eachData.rocket.second_stage.payloads[0].orbit_params.mean_motion}</td>
                                        </tr>

                                        <tr>
                                            <td>raan</td>
                                            <td>{props.eachData.rocket.second_stage.payloads[0].orbit_params.raan}</td>
                                        </tr>
                                        <tr>
                                            <td>arg_of_pericenter</td>
                                            <td>{props.eachData.rocket.second_stage.payloads[0].orbit_params.arg_of_pericenter}</td>
                                        </tr>
                                        <tr>
                                            <td>mean_anomaly</td>
                                            <td>{props.eachData.rocket.second_stage.payloads[0].orbit_params.mean_anomaly}</td>
                                        </tr>
                                    </td>
                                </tr>
                            </td>
                        </tr>
                    </td>
                </tr>
                <tr>
                    <td>fairings</td>
                    {(props.eachData.rocket.fairings === null)
                    ?" "
                    :<td>
                        <tr>
                            <td>reused</td>
                            <td>{props.eachData.rocket.fairings.reused}</td>
                        </tr>
                        <tr>
                            <td>recovery_attempt</td>
                            <td>{props.eachData.rocket.fairings.recovery_attempt}</td>
                        </tr>
                        <tr>
                            <td>recovered</td>
                            <td>{props.eachData.rocket.fairings.recovered}</td>
                        </tr>
                        <tr>
                            <td>ship</td>
                            <td>{props.eachData.rocket.fairings.ship}</td>
                        </tr>
                    </td>
                    }
                </tr>

            </td>
          </tr>
          <tr>
            <td>ships</td>
            <td>{props.eachData.ships[0]}</td>
          </tr>
          <tr>
            <td>telemetry</td>
            <td>{props.eachData.telemetry.flight_club}</td>
          </tr>
          <tr>
            <td>launch_site</td>
            <td>
                <tr>
                    <td>site_id</td>
                    <td>{props.eachData.launch_site.site_id}</td>
                </tr>
                <tr>
                    <td>site_name</td>
                    <td>{props.eachData.launch_site.site_name}</td>
                </tr>
                <tr>
                    <td>site_name_long</td>
                    <td>{props.eachData.launch_site.site_name_long}</td>
                </tr>
            </td>
          </tr>
          <tr>
            <td>launch_success</td>
            <td>{props.eachData.launch_success}</td>
          </tr>
          <tr>
            <td>launch_failure_details</td>
            {(props.eachData.launch_failure_details===undefined)
            ?" "
            :<td>
                <tr>
                    <td>site_id</td>
                    <td>{props.eachData.launch_failure_details.time}</td>
                </tr>
                <tr>
                    <td>altitude</td>
                    <td>{props.eachData.launch_failure_details.altitude}</td>
                </tr>
                <tr>
                    <td>reason</td>
                    <td>{props.eachData.launch_failure_details.reason}</td>
                </tr>
            </td>
            }
          </tr>
          <tr>
            <td>links</td>
            <td>
                <tr>
                    <td>mission_patch</td>
                    <td><a href={props.eachData.links.mission_patch}>{props.eachData.links.mission_patch}</a></td>
                </tr>
                <tr>
                    <td>mission_patch_small</td>
                    <td><a href={props.eachData.links.mission_patch_small}>{props.eachData.links.mission_patch_small}</a></td>
                </tr>
                <tr>
                    <td>reddit_campaign</td>
                    <td><a href={props.eachData.links.reddit_campaign}>{props.eachData.links.reddit_campaign}</a></td>
                </tr>
                <tr>
                    <td>reddit_launch</td>
                    <td><a href={props.eachData.links.reddit_launch}>{props.eachData.links.reddit_launch}</a></td>
                </tr>
                <tr>
                    <td>reddit_recovery</td>
                    <td><a href={props.eachData.links.reddit_recovery}>{props.eachData.links.reddit_recovery}</a></td>
                </tr>
                <tr>
                    <td>reddit_media</td>
                    <td><a href={props.eachData.links.reddit_media}>{props.eachData.links.reddit_media}</a></td>
                </tr>
                <tr>
                    <td>presskit</td>
                    <td><a href={props.eachData.links.presskit}>{props.eachData.links.presskit}</a></td>
                </tr>
                <tr>
                    <td>article_link</td>
                    <td><a href={props.eachData.links.article_link}>{props.eachData.links.article_link}</a></td>
                </tr>
                <tr>
                    <td>wikipedia</td>
                    <td><a href={props.eachData.links.wikipedia}>{props.eachData.links.wikipedia}</a></td>
                </tr>
                <tr>
                    <td>video_link</td>
                    <td><a href={props.eachData.links.video_link}>{props.eachData.links.video_link}</a></td>
                </tr>
                <tr>
                    <td>youtube_id</td>
                    <td><a href={props.eachData.links.youtube_id}>{props.eachData.links.youtube_id}</a></td>
                </tr>      
            </td>
          </tr>

          <tr>
            <td>details</td>
            <td>{props.eachData.details}</td>
          </tr>
          <tr>
            <td>static_fire_date_utc</td>
            <td>{props.eachData.static_fire_date_utc}</td>
          </tr>
          <tr>
            <td>static_fire_date_unix</td>
            <td>{props.eachData.static_fire_date_unix}</td>
          </tr>
          <tr>
            <td>timeline</td>
            <td>{props.eachData.timeline.webcast_liftoff}</td>
          </tr>
          <tr>
            <td>crew</td>
            <td>{props.eachData.crew}</td>
          </tr>         
        </tbody>
      </Table>
    </div>
  );
}

export default ViewTable;
