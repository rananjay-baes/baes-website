import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Clock, TrendingUp } from "lucide-react";
import React from "react";

interface NewsArticle {
  id: number;
  title: string;
  description: string;
  source: string;
  publishedAt: string;
  category: string;
}

interface NewsData {
  articles: NewsArticle[];
  lastUpdated: string;
}

export default function GoldNewsFeed() {
  const [newsData, setNewsData] = useState<NewsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/gold-news.json")
      .then((res) => res.json())
      .then((data: NewsData) => {
        setNewsData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading news data:", error);
        setLoading(false);
      });
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 48) return "Yesterday";
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Market Analysis": "bg-blue-500/10 text-blue-600 border-blue-500/20",
      "Price Forecast": "bg-accent/10 text-accent border-accent/20",
      "Central Banks": "bg-purple-500/10 text-purple-600 border-purple-500/20",
      "Investment Flows": "bg-orange-500/10 text-orange-600 border-orange-500/20",
      "Technical Analysis": "bg-cyan-500/10 text-cyan-600 border-cyan-500/20",
      "Supply & Demand": "bg-pink-500/10 text-pink-600 border-pink-500/20",
      "Currency Impact": "bg-indigo-500/10 text-indigo-600 border-indigo-500/20",
      "Trading Strategy": "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    };
    return colors[category] || "bg-muted text-muted-foreground";
  };

  if (loading) {
    return (
      <div className="w-full py-8">
        <p className="text-center text-muted-foreground">Loading news...</p>
      </div>
    );
  }

  if (!newsData || newsData.articles.length === 0) {
    return (
      <div className="w-full py-8">
        <p className="text-center text-muted-foreground">
          No news articles available
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid md:grid-cols-2 gap-6">
        {newsData.articles.map((article) => (
          <Card
            key={article.id}
            className="hover:shadow-lg transition-shadow cursor-pointer group"
          >
            <CardHeader>
              <div className="flex items-start justify-between gap-4 mb-2">
                <Badge
                  variant="outline"
                  className={`${getCategoryColor(article.category)} border`}
                >
                  {article.category}
                </Badge>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {formatDate(article.publishedAt)}
                </div>
              </div>
              <CardTitle className="text-lg group-hover:text-accent transition-colors">
                {article.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                {article.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-foreground">
                  {article.source}
                </span>
                <TrendingUp className="w-4 h-4 text-accent" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-xs text-muted-foreground">
          Last updated: {formatDate(newsData.lastUpdated)}
        </p>
      </div>
    </div>
  );
}
