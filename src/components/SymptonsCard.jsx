import { FaRegDizzy, FaHeartbeat, FaBan } from "react-icons/fa";

const SymptonsCard = ({ description, icon }) => {
    const selectIcon = () => {
        switch (icon) {
            case 'dizzy':
                return <FaRegDizzy />;
            case 'heartbeat':
                return <FaHeartbeat />;
            case 'ban':
                return <FaBan />;
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col items-center flex-wrap">
            <div className="text-4xl md:text-6xl p-4 bg-gray-200 border rounded-full mb-4 md:mb-12">
                {selectIcon()}
            </div>
            <p className="text-sm md:text-lg text-center ">{description}</p>
        </div>
    );
};

export default SymptonsCard;
