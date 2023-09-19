function PageContainer({ children }) {
    return (
        <div className="w-96 h-[40rem] bg-white relative overflow-hidden rounded-xl">
            {children}
        </div>
    );
}
export default PageContainer;
