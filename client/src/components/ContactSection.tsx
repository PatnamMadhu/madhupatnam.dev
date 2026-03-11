import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import { z } from "zod";

type ContactFormData = z.infer<typeof insertContactMessageSchema>;

export function ContactSection() {
  const { mutate, isPending, isSuccess } = useSubmitContact();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(insertContactMessageSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    mutate(data, {
      onSuccess: () => reset(),
    });
  };

  const inputClasses =
    "w-full bg-primary/5 border border-primary/20 rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all duration-300";

  return (
    <section id="connect" className="py-20 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-label mb-4">/ connect with me</p>
        <p className="text-base text-muted-foreground/70 mb-10 max-w-[500px] leading-relaxed">
          Interested in collaborating on AI-native platforms, scalable systems, or just want to discuss cutting-edge tech? I'd love to connect.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="max-w-[550px]"
      >
        {isSuccess ? (
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-effect p-6 text-primary text-base rounded-lg border border-primary/40 text-center"
          >
            <span className="text-2xl mr-3">✨</span>
            <span className="font-medium">Message transmitted successfully!</span>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <label className="text-xs text-muted-foreground/60 uppercase tracking-widest font-bold block mb-2">
                  name
                </label>
                <input
                  {...register("name")}
                  className={inputClasses}
                  placeholder="your name"
                />
                {errors.name && (
                  <span className="text-red-400 text-xs mt-1.5 block font-medium">
                    {errors.name.message}
                  </span>
                )}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label className="text-xs text-muted-foreground/60 uppercase tracking-widest font-bold block mb-2">
                  email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  className={inputClasses}
                  placeholder="you@email.com"
                />
                {errors.email && (
                  <span className="text-red-400 text-xs mt-1.5 block font-medium">
                    {errors.email.message}
                  </span>
                )}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
            >
              <label className="text-xs text-muted-foreground/60 uppercase tracking-widest font-bold block mb-2">
                message
              </label>
              <textarea
                {...register("message")}
                rows={4}
                className={`${inputClasses} resize-none`}
                placeholder="share your thoughts or ideas..."
              />
              {errors.message && (
                <span className="text-red-400 text-xs mt-1.5 block font-medium">
                  {errors.message.message}
                </span>
              )}
            </motion.div>

            <motion.button
              type="submit"
              disabled={isPending}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="self-start bg-primary text-foreground font-bold text-sm px-8 py-3 rounded-lg hover:bg-primary/90 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20 hover:shadow-primary/40"
            >
              {isPending ? "transmitting..." : "send message →"}
            </motion.button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
