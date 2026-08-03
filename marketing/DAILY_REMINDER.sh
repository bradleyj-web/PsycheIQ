#!/bin/bash
# PsycheIQ Daily Marketing Reminder Script
# Shows what to do each day of the marketing plan

# Get current day of week (1=Monday, 7=Sunday)
DAY=$(date +%u)
WEEKDAY=$(date +%A)
DAYS_ELAPSED=$(echo "$(date +%j) - 212" | bc)  # Days since July 31

echo "=========================================="
echo "  PsycheIQ Marketing - Daily Actions"
echo "=========================================="
echo ""
echo "Today is: $WEEKDAY, $(date +'%B %d, %Y')"
echo "Days since start: $DAYS_ELAPSED"
echo ""

# Check if accounts are set up (user should update these)
REDDIT_READY=false
TIKTOK_READY=false
KARMA_COUNT=0  # Update this manually

echo "STATUS CHECK:"
echo "-------------"
if [ "$REDDIT_READY" = true ]; then
    echo "✓ Reddit: Account ready"
else
    echo "⚠ Reddit: Set up account at https://reddit.com/register"
fi

if [ "$TIKTOK_READY" = true ]; then
    echo "✓ TikTok: Account ready"
else
    echo "⚠ TikTok: Set up account on mobile app"
fi

echo "Current Karma: $KARMA_COUNT/100"
echo ""

# Daily actions based on day
case $DAY in
    1)
        echo "MONDAY TASKS:"
        echo "-------------"
        echo "1. REDDIT (15 min):"
        echo "   → Comment 10 times on r/mbti and r/Enneagram"
        echo "   → Use comments from: marketing/content/REDDIT_ENGAGEMENT.md"
        echo ""
        echo "2. TIKTOK (15 min):"
        echo "   → Post Video 1: '3 Questions That Reveal Your Starseed Origin'"
        echo "   → Script in: marketing/content/TIKTOK_SCRIPTS.md"
        echo "   → Best time: 6-8pm"
        echo ""
        echo "3. Reply to all weekend comments (10 min)"
        echo ""
        ;;
    2)
        echo "TUESDAY TASKS:"
        echo "--------------"
        echo "1. REDDIT (15 min):"
        echo "   → Comment 10 times"
        echo "   → Focus on 'mistyped' and 'type me' posts"
        echo ""
        echo "2. TIKTOK (15 min):"
        echo "   → Post Video 2: 'POV: You Finally Know Why You Don't Fit In'"
        echo "   → Check analytics on yesterday's video"
        echo ""
        echo "3. TWITTER (10 min):"
        echo "   → Post first thread (template in SOCIAL_SETUP_GUIDE.md)"
        echo ""
        ;;
    3)
        echo "WEDNESDAY TASKS:"
        echo "----------------"
        echo "1. REDDIT (15 min):"
        echo "   → Comment 10 times"
        echo "   → Engage with cognitive function discussions"
        echo ""
        echo "2. TIKTOK (15 min):"
        echo "   → Post Video 3: 'Which Starseed Type Are You?' (carousel)"
        echo ""
        echo "3. BLOG (30 min):"
        echo "   → Publish post to Medium: BLOG_starseed-types-guide.md"
        echo "   → Cross-post to Dev.to"
        echo ""
        ;;
    4)
        echo "THURSDAY TASKS:"
        echo "---------------"
        echo "1. REDDIT (15 min):"
        echo "   → Comment 10 times"
        echo "   → Focus on relationship/ dating posts"
        echo ""
        echo "2. TIKTOK (15 min):"
        echo "   → Post Video 4: '5 Signs You're a Starseed'"
        echo ""
        echo "3. INSTAGRAM (20 min):"
        echo "   → Create 9-grid launch posts"
        echo "   → Use result cards from marketing/assets/"
        echo ""
        ;;
    5)
        echo "FRIDAY TASKS:"
        echo "-------------"
        echo "1. REDDIT (15 min):"
        echo "   → Comment 10 times"
        echo "   → Engage with Enneagram type discussions"
        echo ""
        echo "2. TIKTOK (15 min):"
        echo "   → Post Video 5: User testimonial style"
        echo ""
        echo "3. ANALYTICS (15 min):"
        echo "   → Check all platform stats"
        echo "   → Note which content performed best"
        echo ""
        ;;
    6)
        echo "SATURDAY TASKS:"
        echo "---------------"
        echo "1. TIKTOK (15 min):"
        echo "   → Post Video 6: Trending format"
        echo "   → Check trending sounds on TikTok"
        echo ""
        echo "2. CONTENT CREATION (60 min):"
        echo "   → Create next week's TikTok scripts"
        echo "   → Design 7 social graphics in Canva"
        echo "   → Schedule posts if using Buffer"
        echo ""
        ;;
    7)
        echo "SUNDAY TASKS:"
        echo "-------------"
        echo "1. REST DAY - Light engagement only"
        echo ""
        echo "2. Reply to comments (15 min)"
        echo ""
        echo "3. PLANNING (30 min):"
        echo "   → Review week's performance"
        echo "   → Plan next week's content"
        echo "   → Update karma count in this script"
        echo ""
        echo "4. Read marketing/content/REDDIT_ENGAGEMENT.md"
        echo "   → Prepare next week's comments"
        echo ""
        ;;
esac

echo "=========================================="
echo "QUICK REFERENCE:"
echo "=========================================="
echo ""
echo "Copy-Paste Resources:"
echo "  • TikTok scripts:  marketing/content/TIKTOK_SCRIPTS.md"
echo "  • Reddit comments: marketing/content/REDDIT_ENGAGEMENT.md"
echo "  • Blog post:       marketing/content/BLOG_starseed-types-guide.md"
echo "  • Canva templates: marketing/content/CANVA_TEMPLATES.md"
echo ""
echo "Dashboard: marketing/DASHBOARD.html"
echo ""
echo "Platform URLs:"
echo "  Reddit:    https://reddit.com/register"
echo "  Medium:    https://medium.com/new-story"
echo "  Dev.to:    https://dev.to/new"
echo "  Canva:     https://canva.com"
echo "  Linktree:  https://linktr.ee"
echo ""
echo "=========================================="
echo "TIPS FOR TODAY:"
echo "=========================================="

# Rotating tips based on day
case $DAY in
    1) echo "• Start week strong with your best content"
       echo "• Monday posts often get higher engagement" ;;
    2) echo "• Reply to every comment within first hour"
       echo "• Engagement signals boost algorithm" ;;
    3) echo "• Mid-week is good for educational content"
       echo "• People are in learning mode" ;;
    4) echo "• Thursday is peak engagement day"
       echo "• Post your strongest content today" ;;
    5) echo "• Friday content can be lighter/fun"
       echo "• Weekend mindset starts early" ;;
    6) echo "• Saturday morning posts do well"
       echo "• People browse during coffee time" ;;
    7) echo "• Sunday is for planning, not posting"
       echo "• Rest is part of sustainable marketing" ;;
esac

echo ""
echo "=========================================="
echo "To update karma count, edit this file:"
echo "  Change: KARMA_COUNT=0"
echo "  To:     KARMA_COUNT=XXX"
echo "=========================================="
