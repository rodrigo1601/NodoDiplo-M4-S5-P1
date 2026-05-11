const AvatarPreview = ({ url }) => (
    <div className="flex justify-center">
        <img
            src={url || "https://placehold.co/400x400"}
            alt="preview"
            className="w-52 h-52 object-cover object-top rounded-xl border-2 border-yellow-500"
        />
    </div>
);

export default AvatarPreview;