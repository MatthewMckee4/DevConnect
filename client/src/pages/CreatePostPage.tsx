import CreatePostForm from "@/components/forms/CreatePostForm";

export default function CreatePostPage() {
    return (
        <div className="max-w-[1000px] mx-auto">
            <h1 className="text-3xl mb-2">Create Post</h1>
            <CreatePostForm />
        </div>
    );
}
