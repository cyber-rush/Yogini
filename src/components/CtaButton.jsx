
const CtaButton = ({ buttonText, type }) => {

    const buttonStyle = () => {
        switch (type) {
            case 'trial':
                return 'border border-rose-500 text-rose-500 hover:bg-gray-200';
            case 'buy':
                return ' border border-rose-500 bg-rose-500 text-white hover:bg-rose-400';
            case 'faq':
                return ' border text-cool-gray-500 hover:bg-gray-200';
            default:
                return null;
        }
    }
    return (
        <>
            <button className={`font-medium px-4 py-2 rounded-3xl ${buttonStyle()}`}>
                {buttonText}
            </button>
        </>
    )
}

export default CtaButton
