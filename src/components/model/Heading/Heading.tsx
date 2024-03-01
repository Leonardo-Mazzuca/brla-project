import Text from "../../types/Text/Text";



const Heading: React.FC<Text> = ({content,color = "text-gray-900", size = "text-5xl", addons}) => {


    return <h2 className={`${size} font-bold text-${color} ${addons}`}>{content}</h2>;

}
export default Heading;