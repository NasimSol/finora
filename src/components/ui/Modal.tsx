type ModalProps = {
    open: boolean;
    title?: string;
    onClose: () => void;
    children: React.ReactNode;
};

export default function Modal({
                                  open,
                                  title,
                                  onClose,
                                  children,
                              }: ModalProps) {
    if (!open) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-md rounded-2xl bg-surface p-6">
                <div className="flex items-center justify-between">
                    {title && (
                        <h2 className="text-xl font-semibold">
                            {title}
                        </h2>
                    )}

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close modal"
                        className="text-muted transition hover:text-foreground"
                    >
                        ✕
                    </button>
                </div>

                <div className="mt-6">
                    {children}
                </div>
            </div>
        </div>
    );
}