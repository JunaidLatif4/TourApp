import React, { useState } from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MdExpandMore as ExpandMoreIcon } from "react-icons/md"
import { AiOutlinePlus } from "react-icons/ai"

import "./Journey.scss"

const Journey = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange =
        (panel) => (event, isExpanded) => {
            setExpanded(isExpanded ? panel : false);
        };
    return (
        <>
            <div className="journey_container">
                <div className="title">
                    Your journey
                </div>
                <div className="detail">
                    <p> Spend three days weaving through the landscapes, legends, and landmarks of Skye.</p>
                    <p>On your journey north, you’ll travel past the historic heart of Scotland, and learn about the battles between the Scottish and English.</p>
                    <p>In Skye, you’ll stay in the cute and cultural town of Portree, and explore the scenery that inspired countless myths and legends.</p>
                    <p>And by the time you’re home, you’ll understand why this little island deserves its large reputation.</p>
                </div>
                <div className="accordian_box">
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <div className="name">
                                <AiOutlinePlus /> Tour Details
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div className="content">
                              <div className="info_box">
                                  <p className="heading">Starts</p>
                                  <p className="info">Check-in closes at 08:45 (tour departs at 09:00) - Glasgow Buchanan Bus Station Pick Up, Glasgow Buchanan Bus Station (Stance between 23 to 32), Killermont Street, Glasgow, G2 3NW</p>
                              </div>
                              <div className="break"></div>

                              <div className="info_box">
                                  <p className="heading">Finishes (approx.)</p>
                                  <p className="info">19:30 - Glasgow Buchanan Bus Station Drop Off, Glasgow Buchanan Bus Station, Killermont Street, Glasgow, G2 3NW</p>
                              </div>
                              <div className="break"></div>

                              <div className="info_box">
                                  <p className="heading">Luggage</p>
                                  <p className="info">You're restricted to 14kg (31lbs) of luggage per person. This should be one piece of luggage similar to an airline carry-on bag (approximately 55cm x 45cm x 25cm / 22in x 17in x 10in) and a small bag for onboard personal items.</p>
                              </div>
                              <div className="break"></div>

                              <div className="info_box">
                                  <p className="heading">Discounts</p>
                                  <p className="info">Students, seniors over 60, and children between 5 and 15 (unfortunately, we don't carry children under 5 years old)</p>
                              </div>
                              <div className="break"></div>

                              <div className="info_box">
                                  <p className="heading"></p>
                                  <p className="info"></p>
                              </div>
                              <div className="break"></div>

                              <div className="info_box">
                                  <p className="heading"></p>
                                  <p className="info"></p>
                              </div>
                              <div className="break"></div>

                          </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <div className="name">
                                <AiOutlinePlus /> Accommodation
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div className="content">
                              <div className="question_box">
                                  <p className="question">Where does this tour stay overnight?</p>
                                  <p className="ans">You stay two nights in Portree* on the Isle of Skye.</p>
                              </div>
                    
                              <div className="question_box">
                                  <p className="question">How does the accommodation work?</p>
                                  <p className="ans">Your tour excludes accommodation; but when you book, you can ask us to reserve local accommodation for you, or you can choose to reserve your own accommodation in the overnight locations.</p>
                              </div>
                    
                              <div className="question_box">
                                  <p className="question">I want Rabbie’s to book my accommodation, what happens now?</p>
                                  <p className="ans">Once you've booked your tour, we'll reserve all your accommodation, and your driver will drop you off with your hosts. You’ll pay your accommodation directly. Most don’t accept credit cards, so be prepared to pay cash.</p>
                              </div>
                    
                              <div className="question_box">
                                  <p className="question">What if I want to change my accommodation booking with Rabbie’s?</p>
                                  <p className="ans">Plans can change, so we let you alter your accommodation choices for free within the first 48 hours of booking. After this time, amendments aren't guaranteed and carry a surcharge. Please contact rooms@rabbies.com if you have any questions.</p>
                              </div>
                    
                              <div className="question_box">
                                  <p className="question">I booked my own accommodation is there anything I need to do?</p>
                                  <p className="ans">You’ll need to contact us with your accommodation details. Please only reserve accommodation within the overnight towns that your tour stops in. Your driver will drop you off at your chosen accommodation as long as it’s relatively central.</p>
                              </div>
                    
                              <div className="question_box">
                                  <p className="question">What if I cancel my tour at short notice?</p>
                                  <p className="ans">You may be liable for the cost of your first nights’ accommodation for each separate accommodation booked. If you cancel less than three days before departure, you may be liable for all your accommodation costs.</p>
                              </div>
                    
                              <div className="question_box">
                                  <p className="question">What are the accommodation types?</p>
                                  <p className="ans">We try to reserve accommodation that’s no more than a 20-minute walk from the town centre. We regularly check our accommodation suppliers to ensure they reach a certain standard. The prices below are for guidance only.</p>
                              </div>
                    
                              <div className="question_box">
                                  <p className="question">B&B (Bed and Breakfast) Standard</p>
                                  <p className="ans">The toilet and showering facilities are shared with at least one other room in the house, and the price includes breakfast. The cost is £35 - £50 per person per night based on shared accommodation. A single standard room is £40 - £70 per night.</p>
                              </div>
                    
                          </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <div className="name">
                                <AiOutlinePlus /> FAQs
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div className="content">
                              <div className="question_box">
                                  <p className="question">Do you offer hotel pickups in the departure cities?</p>
                                  <p className="ans">The UK and Ireland's historic city centres are full of narrow streets and winding roads. So, to speed up your departure, we only pick up from our central meeting points. What's more is leaving the city using the most direct route also reduces the carbon footprint of our tours.</p>
                              </div>
                    
                              <div className="question_box">
                                  <p className="question">Is there parking close to the departure point?</p>
                                  <p className="ans">We don't recommend bringing your car into the centre of our departure cities. It can be hard to find parking, and there are excellent public transportation services.</p>
                              </div>
                    
                              <div className="question_box">
                                  <p className="question">I want Rabbie’s to book my accommodation, what happens now?</p>
                                  <p className="ans">Once you've booked your tour, we'll reserve all your accommodation, and your driver will drop you off with your hosts. You’ll pay your accommodation directly. Most don’t accept credit cards, so be prepared to pay cash.</p>
                              </div>
                    
                              <div className="question_box">
                                  <p className="question">What if I want to change my accommodation booking with Rabbie’s?</p>
                                  <p className="ans">Plans can change, so we let you alter your accommodation choices for free within the first 48 hours of booking. After this time, amendments aren't guaranteed and carry a surcharge. Please contact rooms@rabbies.com if you have any questions.</p>
                              </div>
                    
                              <div className="question_box">
                                  <p className="question">I booked my own accommodation is there anything I need to do?</p>
                                  <p className="ans">You’ll need to contact us with your accommodation details. Please only reserve accommodation within the overnight towns that your tour stops in. Your driver will drop you off at your chosen accommodation as long as it’s relatively central.</p>
                              </div>
                    
                              <div className="question_box">
                                  <p className="question">What if I cancel my tour at short notice?</p>
                                  <p className="ans">You may be liable for the cost of your first nights’ accommodation for each separate accommodation booked. If you cancel less than three days before departure, you may be liable for all your accommodation costs.</p>
                              </div>
                    
                              <div className="question_box">
                                  <p className="question">What are the accommodation types?</p>
                                  <p className="ans">We try to reserve accommodation that’s no more than a 20-minute walk from the town centre. We regularly check our accommodation suppliers to ensure they reach a certain standard. The prices below are for guidance only.</p>
                              </div>
                    
                              <div className="question_box">
                                  <p className="question">B&B (Bed and Breakfast) Standard</p>
                                  <p className="ans">The toilet and showering facilities are shared with at least one other room in the house, and the price includes breakfast. The cost is £35 - £50 per person per night based on shared accommodation. A single standard room is £40 - £70 per night.</p>
                              </div>
                    
                          </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </>
    )
}

export default Journey