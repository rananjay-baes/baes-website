import { Card, CardContent } from "./ui/card";
import { AlertTriangle } from "lucide-react";
import React from "react";

export default function Disclaimer() {
  return (
    <Card className="bg-destructive/5 border-destructive/20">
      <CardContent className="pt-6">
        <div className="flex gap-4">
          <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <div className="space-y-3 text-sm text-muted-foreground">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Disclaimer</h4>
              <p>
                We are not financial advisors and do not act as investment managers, brokers, or portfolio managers. 
                Our content does not constitute investment, financial, or trading advice and should not be viewed as 
                any form of recommendation. Trading in financial markets is inherently high-risk; while there is potential 
                for substantial gains, you may lose all of your invested capital and potentially more. Additionally, past 
                performance is not indicative of future results and is provided solely for informational purposes.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
