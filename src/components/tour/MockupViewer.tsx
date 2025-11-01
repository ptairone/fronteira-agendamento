import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn } from "lucide-react";

interface MockupViewerProps {
  currentStep: number;
  mockupUrl: string;
  highlights?: {
    x: number;
    y: number;
    width: number;
    height: number;
    label?: string;
  }[];
}

export const MockupViewer = ({ currentStep, mockupUrl, highlights = [] }: MockupViewerProps) => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative w-full h-full flex items-center justify-center p-4"
        >
          <div className="relative max-w-full max-h-full">
            <img
              src={mockupUrl}
              alt={`Tour step ${currentStep + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            
            {/* Highlights overlay */}
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="absolute border-2 border-primary rounded-lg pointer-events-none"
                style={{
                  left: `${highlight.x}%`,
                  top: `${highlight.y}%`,
                  width: `${highlight.width}%`,
                  height: `${highlight.height}%`,
                }}
              >
                <motion.div
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-primary/20 rounded-lg"
                />
                
                {highlight.label && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg"
                  >
                    {highlight.label}
                  </motion.div>
                )}
              </motion.div>
            ))}
            
            {/* Zoom indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-full"
            >
              <ZoomIn className="h-5 w-5 text-muted-foreground" />
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
