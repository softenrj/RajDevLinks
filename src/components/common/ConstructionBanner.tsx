import { motion } from "framer-motion";
import { X, ArrowRight } from "lucide-react"; 

import {
  Dialog,
  DialogContent,
} from "../ui/dialog";
import { Button } from "../ui/button";


export default function ConstructionBanner({ open, onClose}: { open: boolean, onClose: () => void}) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="p-0 border-none bg-transparent shadow-none ">
        
        <div className="relative w-full aspect-video md:aspect-21/9 group select-none ">

          <div className="absolute inset-0 z-0">
            <img
              src="/bg.png"
              alt="Background"
              className="w-full h-full object-cover"
            />

          </div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="absolute bottom-0 right-[-5%] h-[115%] w-auto z-10 pointer-events-none flex items-end"
          >
            <img
              src="/jjk.png"
              alt="Gojo Satoru"
              className="h-full w-auto object-contain drop-shadow-[0_0_25px_rgba(168,85,247,0.2)]"
            />
          </motion.div>

          <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-12 py-8 max-w-[65%]">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex self-center items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 w-fit mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
              <span className="text-[10px] md:text-xs font-mono font-bold text-yellow-100 uppercase tracking-widest">
                Under Development
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-3 leading-[0.9]">
                PORTFOLIO <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-500">
                  LOADING...
                </span>
              </h1>
              <p className="text-violet-500 text-center ml-6 text-xs md:text-sm font-medium max-w-sm leading-relaxed drop-shadow-md">
                I am currently recoding my entire showcase. A new "Domain" is being constructed.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-8 self-center ml-20"
            >
              <Button 
                onClick={onClose}
                className="bg-white text-black hover:bg-neutral-200 font-bold rounded-full px-8 gap-2 transition-all active:scale-95"
              >
                Wait for it <ArrowRight size={16} />
              </Button>
            </motion.div>
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white/70 hover:text-white backdrop-blur-sm transition-all"
          >
            <X size={18} />
          </button>
        </div>

      </DialogContent>
    </Dialog>
  );
}