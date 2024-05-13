import { Map, Marker } from "pigeon-maps"

const MapHome = () => {
    return (
        <div>
             <Map height={300} defaultCenter={[23.8041, 90.4152]} defaultZoom={11}>
      <Marker width={50} anchor={[23.8041, 90.4152]} />
    </Map>
        </div>
    );
};

export default MapHome;