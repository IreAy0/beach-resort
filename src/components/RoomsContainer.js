import React from 'react'
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { withRoomConsumer } from "../Context";
import Loading from './Loading'
import Title from "../components/Title"


function RoomsContainer({context}){
    const { loading, sortedRooms, rooms } = context;
    // if (Loading){
    //     return <Loading />;
    // }
    return (
        <>
           
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </>
    );
}


export default withRoomConsumer (RoomsContainer);

// import React from 'react'
// import RoomsFilter from "./RoomsFilter";
// import RoomsList from "./RoomsList";
// import { RoomConsumer } from "../Context";
// import Loading from './Loading'
// export default function RoomsContainer() {

//     return (
//         <RoomConsumer>
//             {
//                 value => {
//                     const {loading,sortedRooms,rooms} = value

//                     return (
//                     <div>
//                         Hello from Rooms Container
//                         <RoomsFilter rooms={rooms}/>
//                         <RoomsList rooms={sortedRooms}/>
//                     </div>
//                     );
//                 }
//             }
//         </RoomConsumer>
       
//     );
// }
