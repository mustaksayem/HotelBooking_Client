import { Map, Marker } from "pigeon-maps"

const MapHome = () => {
    return (
        <div className="py-6 border-t-4 border-blue-500 bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-gray-200">
            <h1 className="text-center text-3xl font-bold my-6 ">Check Our Location To Come</h1>
             <Map height={300} defaultCenter={[23.8041, 90.4152]} defaultZoom={11}>
      <Marker width={50} anchor={[23.8041, 90.4152]} />
    </Map>
        </div>
    );
};

export default MapHome;