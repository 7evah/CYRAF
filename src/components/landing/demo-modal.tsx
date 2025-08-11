"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export function DemoModal({ isOpen, onOpenChange }: { isOpen: boolean; onOpenChange: (open: boolean) => void }) {
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast({
      title: "Demo Request Sent",
      description: "Thanks for your interest! We'll be in touch shortly.",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Book a Demo</DialogTitle>
          <DialogDescription>
            Choose a time and provide your contact — we&apos;ll reach out within one business day.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <Input placeholder="Full name" required />
          <Input type="email" placeholder="Work email" required />
          <div className="flex gap-4">
            <Input placeholder="Company" required />
            <Input type="tel" placeholder="Phone" />
          </div>
          <DialogFooter className="sm:justify-end gap-2 sm:gap-0">
             <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Request Demo</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
