import { SquareCheck, Trash2, SquarePlus, Pencil} from 'lucide-react';

interface ButtonProps {
    title: string
}
function Button ({ title } : ButtonProps) {
    if (title === "done"){
        return (
            <SquareCheck className="ml-2 text-green-500 cursor-pointer"/>
        );
    } else if (title === "add"){
        return (
            <SquareCheck className="ml-2 text-violet-500 cursor-pointer"/>
        )
    } else if (title === "delete"){
        return (
            <Trash2 className="ml-2 text-red-500 cursor-pointer" size={22}/>
        )
    } else if (title === "update"){
        return (
            <Pencil className="ml-2 text-amber-500 cursor-pointer" size={22}/>
        )
    } else {
        return (
            <div>
                Nothing to Show Here hehe..
            </div>
        )
    }
}

export default Button;