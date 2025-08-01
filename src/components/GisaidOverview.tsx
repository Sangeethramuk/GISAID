import { 
  Box, 
  Typography, 
  Button, 
  Card, 
  CardContent,
  Container,
  Chip,
  IconButton,
  Paper,
  Menu,
  MenuItem
} from '@mui/material';
import {
  Search,
  Notifications,
  Add,
  Comment,
  KeyboardArrowDown,
  FilterList,
  CalendarToday,
  LocationOn,
  TrendingUp
} from '@mui/icons-material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import WorldMap from './WorldMap';
import React, { useState } from 'react';

// Mock data for the chart
const chartData = [
  { month: 'Jan,25', h3n2: 45, h1n1: 30, bVictoria: 15, bYamagata: 10 },
  { month: 'Feb,25', h3n2: 50, h1n1: 25, bVictoria: 18, bYamagata: 7 },
  { month: 'Mar,25', h3n2: 55, h1n1: 20, bVictoria: 20, bYamagata: 5 },
  { month: 'Apr,25', h3n2: 60, h1n1: 18, bVictoria: 15, bYamagata: 7 },
  { month: 'May,25', h3n2: 65, h1n1: 15, bVictoria: 12, bYamagata: 8 },
  { month: 'Jun,25', h3n2: 70, h1n1: 12, bVictoria: 10, bYamagata: 8 },
  { month: 'Jul,25', h3n2: 75, h1n1: 10, bVictoria: 8, bYamagata: 7 },
  { month: 'Aug,25', h3n2: 80, h1n1: 8, bVictoria: 6, bYamagata: 6 },
  { month: 'Sep,25', h3n2: 85, h1n1: 6, bVictoria: 5, bYamagata: 4 },
  { month: 'Oct,25', h3n2: 90, h1n1: 5, bVictoria: 3, bYamagata: 2 },
];

const GisaidOverview: React.FC = () => {
  const [dateRangeAnchor, setDateRangeAnchor] = useState<null | HTMLElement>(null);
  const [regionAnchor, setRegionAnchor] = useState<null | HTMLElement>(null);
  const [impactFiltersAnchor, setImpactFiltersAnchor] = useState<null | HTMLElement>(null);
  const [chartTop5Anchor, setChartTop5Anchor] = useState<null | HTMLElement>(null);
  const [chartSubtypesAnchor, setChartSubtypesAnchor] = useState<null | HTMLElement>(null);
  const [mapTop5Anchor, setMapTop5Anchor] = useState<null | HTMLElement>(null);
  const [mapSubtypesAnchor, setMapSubtypesAnchor] = useState<null | HTMLElement>(null);

  // Filter state values
  const [selectedDateRange, setSelectedDateRange] = useState('Last 30 Days');
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [selectedImpactFilter, setSelectedImpactFilter] = useState('All Impacts');
  const [selectedChartTop5, setSelectedChartTop5] = useState('Top 5 by Growth Rate');
  const [selectedChartSubtypes, setSelectedChartSubtypes] = useState('All Subtypes');
  const [selectedMapTop5, setSelectedMapTop5] = useState('Top 5 by Growth Rate');
  const [selectedMapSubtypes, setSelectedMapSubtypes] = useState('All Subtypes');

  const handleDateRangeClick = (event: React.MouseEvent<HTMLElement>) => {
    setDateRangeAnchor(event.currentTarget);
  };

  const handleRegionClick = (event: React.MouseEvent<HTMLElement>) => {
    setRegionAnchor(event.currentTarget);
  };

  const handleImpactFiltersClick = (event: React.MouseEvent<HTMLElement>) => {
    setImpactFiltersAnchor(event.currentTarget);
  };

  const handleChartTop5Click = (event: React.MouseEvent<HTMLElement>) => {
    setChartTop5Anchor(event.currentTarget);
  };

  const handleChartSubtypesClick = (event: React.MouseEvent<HTMLElement>) => {
    setChartSubtypesAnchor(event.currentTarget);
  };

  const handleMapTop5Click = (event: React.MouseEvent<HTMLElement>) => {
    setMapTop5Anchor(event.currentTarget);
  };

  const handleMapSubtypesClick = (event: React.MouseEvent<HTMLElement>) => {
    setMapSubtypesAnchor(event.currentTarget);
  };

  const handleDateRangeClose = () => {
    setDateRangeAnchor(null);
  };

  const handleRegionClose = () => {
    setRegionAnchor(null);
  };

  const handleImpactFiltersClose = () => {
    setImpactFiltersAnchor(null);
  };

  const handleChartTop5Close = () => {
    setChartTop5Anchor(null);
  };

  const handleChartSubtypesClose = () => {
    setChartSubtypesAnchor(null);
  };

  const handleMapTop5Close = () => {
    setMapTop5Anchor(null);
  };

  const handleMapSubtypesClose = () => {
    setMapSubtypesAnchor(null);
  };

  // Filter selection handlers
  const handleDateRangeSelect = (value: string) => {
    setSelectedDateRange(value);
    setDateRangeAnchor(null);
  };

  const handleRegionSelect = (value: string) => {
    setSelectedRegion(value);
    setRegionAnchor(null);
  };

  const handleImpactFilterSelect = (value: string) => {
    setSelectedImpactFilter(value);
    setImpactFiltersAnchor(null);
  };

  const handleChartTop5Select = (value: string) => {
    setSelectedChartTop5(value);
    setChartTop5Anchor(null);
  };

  const handleChartSubtypesSelect = (value: string) => {
    setSelectedChartSubtypes(value);
    setChartSubtypesAnchor(null);
  };

  const handleMapTop5Select = (value: string) => {
    setSelectedMapTop5(value);
    setMapTop5Anchor(null);
  };

  const handleMapSubtypesSelect = (value: string) => {
    setSelectedMapSubtypes(value);
    setMapSubtypesAnchor(null);
  };

  return (
    <Box sx={{ 
      bgcolor: '#ffffff', 
      minHeight: '100vh',
      width: '100vw',
      fontFamily: 'Inter, sans-serif',
      overflowX: 'hidden'
    }}>
      {/* Header */}
      <Box sx={{ 
        bgcolor: '#fcfcfd', 
        borderBottom: '1px solid #eceff3',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%'
      }}>
        <Container maxWidth={false} sx={{ px: 5, width: '100%', maxWidth: '100%' }}>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            py: 1,
            width: '100%'
          }}>
            {/* Logo and Navigation */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <Box sx={{ 
                display: 'flex',
                alignItems: 'center',
                gap: 1.5
              }}>
                {/* Logo Image */}
                <Box sx={{
                  width: 80,
                  height: 80,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 1,
                  overflow: 'hidden'
                }}>
                  <img 
                    src="/images/gisaid-logo.png" 
                    alt="GISAID Logo"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                    onError={(e) => {
                      // Fallback to text logo if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  
                  {/* Fallback Logo (current design) */}
                  <Box sx={{
                    width: 56,
                    height: 56,
                    bgcolor: '#2b7fff',
                    borderRadius: 1.5,
                    display: 'none', // Hidden by default, shows if image fails
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 24,
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    {/* DNA Helix Representation */}
                    <Box sx={{
                      position: 'relative',
                      width: 24,
                      height: 24,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Box sx={{
                        position: 'absolute',
                        width: 3,
                        height: 18,
                        bgcolor: 'white',
                        borderRadius: 1,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          width: 12,
                          height: 3,
                          bgcolor: 'white',
                          borderRadius: 1,
                          top: 3,
                          left: -4.5,
                          transform: 'rotate(45deg)'
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          width: 12,
                          height: 3,
                          bgcolor: 'white',
                          borderRadius: 1,
                          bottom: 3,
                          right: -4.5,
                          transform: 'rotate(-45deg)'
                        }
                      }} />
                    </Box>
                  </Box>
                </Box>
              </Box>
              
              {/* Primary Navigation Tabs */}
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#eceff3',
                    color: '#2b7fff',
                    textTransform: 'none',
                    fontSize: 14,
                    fontWeight: 600,
                    px: 2,
                    py: 1,
                    borderRadius: 1,
                    '&:hover': {
                      bgcolor: '#eceff3'
                    }
                  }}
                >
                  EpiFlu™
                </Button>
                <Button
                  variant="text"
                  sx={{
                    color: '#717784',
                    textTransform: 'none',
                    fontSize: 14,
                    fontWeight: 500,
                    px: 2,
                    py: 1,
                    borderRadius: 1,
                    '&:hover': {
                      bgcolor: '#fcfcfd'
                    }
                  }}
                >
                  EpiCov™
                </Button>
                <Button
                  variant="text"
                  sx={{
                    color: '#717784',
                    textTransform: 'none',
                    fontSize: 14,
                    fontWeight: 500,
                    px: 2,
                    py: 1,
                    borderRadius: 1,
                    '&:hover': {
                      bgcolor: '#fcfcfd'
                    }
                  }}
                >
                  EpiRSV™
                </Button>
                <Button
                  variant="text"
                  sx={{
                    color: '#717784',
                    textTransform: 'none',
                    fontSize: 14,
                    fontWeight: 500,
                    px: 2,
                    py: 1,
                    borderRadius: 1,
                    '&:hover': {
                      bgcolor: '#fcfcfd'
                    }
                  }}
                >
                  EpiPox™
                </Button>
                <Button
                  variant="text"
                  sx={{
                    color: '#717784',
                    textTransform: 'none',
                    fontSize: 14,
                    fontWeight: 500,
                    px: 2,
                    py: 1,
                    borderRadius: 1,
                    '&:hover': {
                      bgcolor: '#fcfcfd'
                    }
                  }}
                >
                  More
                </Button>
              </Box>
            </Box>

            {/* Search and User */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {/* Search */}
              <Box sx={{ 
                position: 'relative',
                width: 350
              }}>
                <Search sx={{ 
                  position: 'absolute', 
                  left: 12, 
                  top: '50%', 
                  transform: 'translateY(-50%)',
                  color: '#99a0ae'
                }} />
                <input
                  type="text"
                  placeholder="Search"
                  style={{
                    width: '100%',
                    padding: '8px 12px 8px 40px',
                    border: '1px solid #e1e4ea',
                    borderRadius: 8,
                    fontSize: 14,
                    outline: 'none',
                    backgroundColor: '#ffffff',
                    color: '#525866'
                  }}
                />
              </Box>

              {/* Notifications and User */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <IconButton>
                  <Notifications sx={{ color: '#525866' }} />
                </IconButton>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{
                    width: 36,
                    height: 36,
                    bgcolor: '#efe3fc',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#862fe9',
                    fontWeight: 600,
                    fontSize: 15
                  }}>
                    SK
                  </Box>
                  <Typography sx={{ 
                    color: '#050506', 
                    fontSize: 14, 
                    fontWeight: 500 
                  }}>
                    Dr. Steve Kumar
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Secondary Navigation Bar */}
      <Box sx={{ 
        bgcolor: '#ffffff', 
        borderBottom: '1px solid #e1e4ea',
        position: 'sticky',
        top: 64,
        zIndex: 999,
        width: '100%'
      }}>
        <Container maxWidth={false} sx={{ px: 5, width: '100%', maxWidth: '100%' }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            py: 1,
            gap: 3
          }}>
            <Button
              variant="text"
              sx={{
                color: '#525866',
                textTransform: 'none',
                fontSize: 14,
                fontWeight: 500,
                px: 2,
                py: 1,
                '&:hover': {
                  bgcolor: '#f8f9fa'
                }
              }}
            >
              Monitor board
            </Button>
            <Button
              variant="text"
              sx={{
                color: '#525866',
                textTransform: 'none',
                fontSize: 14,
                fontWeight: 500,
                px: 2,
                py: 1,
                '&:hover': {
                  bgcolor: '#f8f9fa'
                }
              }}
            >
              Worksets
            </Button>
            <Button
              variant="text"
              sx={{
                color: '#525866',
                textTransform: 'none',
                fontSize: 14,
                fontWeight: 500,
                px: 2,
                py: 1,
                '&:hover': {
                  bgcolor: '#f8f9fa'
                }
              }}
            >
              Upload
            </Button>
            <Button
              variant="text"
              sx={{
                color: '#525866',
                textTransform: 'none',
                fontSize: 14,
                fontWeight: 500,
                px: 2,
                py: 1,
                '&:hover': {
                  bgcolor: '#f8f9fa'
                }
              }}
            >
              Batch Upload
            </Button>
            <Button
              variant="text"
              sx={{
                color: '#525866',
                textTransform: 'none',
                fontSize: 14,
                fontWeight: 500,
                px: 2,
                py: 1,
                '&:hover': {
                  bgcolor: '#f8f9fa'
                }
              }}
            >
              CLI Upload
            </Button>
            <Button
              variant="text"
              sx={{
                color: '#525866',
                textTransform: 'none',
                fontSize: 14,
                fontWeight: 500,
                px: 2,
                py: 1,
                '&:hover': {
                  bgcolor: '#f8f9fa'
                }
              }}
            >
              Settings
            </Button>
            <Button
              variant="text"
              sx={{
                color: '#525866',
                textTransform: 'none',
                fontSize: 14,
                fontWeight: 500,
                px: 2,
                py: 1,
                '&:hover': {
                  bgcolor: '#f8f9fa'
                }
              }}
            >
              Analysis
            </Button>
            <Button
              variant="text"
              sx={{
                color: '#525866',
                textTransform: 'none',
                fontSize: 14,
                fontWeight: 500,
                px: 2,
                py: 1,
                '&:hover': {
                  bgcolor: '#f8f9fa'
                }
              }}
            >
              Community
            </Button>
            <Button
              variant="text"
              sx={{
                color: '#525866',
                textTransform: 'none',
                fontSize: 14,
                fontWeight: 500,
                px: 2,
                py: 1,
                '&:hover': {
                  bgcolor: '#f8f9fa'
                }
              }}
            >
              Help
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth={false} sx={{ px: 5, py: 4, width: '100%', maxWidth: '100%' }}>
        {/* Page Header */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start',
          mb: 5
        }}>
          <Box>
            <Typography variant="h3" sx={{ 
              color: '#222530', 
              fontWeight: 700,
              mb: 2,
              fontSize: '28px'
            }}>
              EpiFlu™ Overview
            </Typography>
            <Typography sx={{ 
              color: '#99a0ae', 
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 1.5
            }}>
              Explore recent trends, variant growth, and global influenza insights powered by real-time genomic data.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="outlined"
              startIcon={<FilterList />}
              sx={{
                borderColor: '#e1e4ea',
                color: '#525866',
                textTransform: 'none',
                fontSize: 14,
                fontWeight: 600,
                px: 3,
                py: 1.5,
                borderRadius: 2
              }}
            >
              + Add Filters
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: '#e1e4ea',
                color: '#525866',
                textTransform: 'none',
                fontSize: 14,
                fontWeight: 600,
                px: 3,
                py: 1.5,
                borderRadius: 2
              }}
            >
              View Comparison
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#2b7fff',
                textTransform: 'none',
                fontSize: 14,
                fontWeight: 600,
                px: 3,
                py: 1.5,
                borderRadius: 2,
                '&:hover': {
                  bgcolor: '#0561e2'
                }
              }}
            >
              Generate Report
            </Button>
          </Box>
        </Box>

        {/* Filters */}
        <Box sx={{ display: 'flex', gap: 2, mb: 5 }}>
          <Button
            variant="outlined"
            startIcon={<CalendarToday />}
            endIcon={<KeyboardArrowDown />}
            sx={{
              borderColor: '#e1e4ea',
              color: '#525866',
              textTransform: 'none',
              fontSize: 14,
              fontWeight: 500,
              px: 3,
              py: 1.5,
              borderRadius: 2
            }}
            onClick={handleDateRangeClick}
          >
            {selectedDateRange}
          </Button>
          <Button
            variant="outlined"
            startIcon={<LocationOn />}
            endIcon={<KeyboardArrowDown />}
            sx={{
              borderColor: '#e1e4ea',
              color: '#525866',
              textTransform: 'none',
              fontSize: 14,
              fontWeight: 500,
              px: 3,
              py: 1.5,
              borderRadius: 2
            }}
            onClick={handleRegionClick}
          >
            {selectedRegion}
          </Button>
          <Button
            variant="outlined"
            startIcon={<TrendingUp />}
            endIcon={<KeyboardArrowDown />}
            sx={{
              borderColor: '#e1e4ea',
              color: '#525866',
              textTransform: 'none',
              fontSize: 14,
              fontWeight: 500,
              px: 3,
              py: 1.5,
              borderRadius: 2
            }}
            onClick={handleImpactFiltersClick}
          >
            {selectedImpactFilter}
          </Button>
        </Box>

        {/* Alert Banner */}
        <Paper sx={{ 
          bgcolor: '#fef2f2', 
          border: '1px solid #fecaca',
          borderRadius: 2,
          p: 3,
          mb: 5
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography sx={{ 
                color: '#2b303b', 
                fontSize: 16,
                fontWeight: 600,
                mb: 1
              }}>
                New Variant KP.3 detected in India
              </Typography>
              <Typography sx={{ 
                color: '#525866', 
                fontSize: 14,
                fontWeight: 400
              }}>
                Growth Rate: +63%, Spike Mutation: S477N
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Button
                sx={{
                  color: '#c10007',
                  textTransform: 'none',
                  fontSize: 14,
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: 'transparent'
                  }
                }}
              >
                View Variant
              </Button>
              <IconButton size="small">
                <Typography sx={{ fontSize: 18, fontWeight: 600 }}>×</Typography>
              </IconButton>
            </Box>
          </Box>
        </Paper>

        {/* Navigation Tabs */}
        <Box sx={{ 
          borderBottom: '1px solid #e1e4ea',
          mb: 4
        }}>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{
              borderBottom: '2px solid #2b7fff',
              pb: 1,
              px: 2
            }}>
              <Typography sx={{
                color: '#2b7fff',
                fontSize: 14,
                fontWeight: 600
              }}>
                Overview
              </Typography>
            </Box>
            <Box sx={{ px: 2, pb: 1 }}>
              <Typography sx={{
                color: '#717784',
                fontSize: 14,
                fontWeight: 500
              }}>
                Sub Types
              </Typography>
            </Box>
            <Box sx={{ px: 2, pb: 1 }}>
              <Typography sx={{
                color: '#717784',
                fontSize: 14,
                fontWeight: 500
              }}>
                Clade
              </Typography>
            </Box>
            <Box sx={{ px: 2, pb: 1 }}>
              <Typography sx={{
                color: '#717784',
                fontSize: 14,
                fontWeight: 500
              }}>
                Emerging Variants
              </Typography>
            </Box>
            <Box sx={{ px: 2, pb: 1 }}>
              <Typography sx={{
                color: '#717784',
                fontSize: 14,
                fontWeight: 500
              }}>
                Watchlist
              </Typography>
            </Box>
            <Box sx={{ px: 2, pb: 1 }}>
              <Typography sx={{
                color: '#717784',
                fontSize: 14,
                fontWeight: 500
              }}>
                Simulation
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Summary Highlights */}
        <Paper sx={{ 
          bgcolor: '#fcfcfd', 
          border: '1px solid #eceff3',
          borderRadius: 3,
          p: 3,
          mb: 5
        }}>
          <Typography sx={{ 
            color: '#99a0ae', 
            fontSize: 14,
            fontWeight: 600,
            mb: 3
          }}>
            Recent Highlights / Summary Section
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography sx={{ 
              color: '#525866', 
              fontSize: 14,
              fontWeight: 500,
              lineHeight: 1.6
            }}>
              • <strong>New Variant Alert:</strong> "Clade 6B.1A.5a.2a + HA_S477N detected in India, showing 15% growth in prevalence over the last week."
            </Typography>
            <Typography sx={{ 
              color: '#525866', 
              fontSize: 14,
              fontWeight: 500,
              lineHeight: 1.6
            }}>
              • <strong>Regional Spike:</strong> "Significant increase in H3N2 cases observed in North America (Last 14 Days)."
            </Typography>
            <Typography sx={{ 
              color: '#525866', 
              fontSize: 14,
              fontWeight: 500,
              lineHeight: 1.6
            }}>
              • <strong>Comparative Insight:</strong> "B/Victoria lineage is currently outpacing B/Yamagata globally, accounting for 70% of B-type submissions."
            </Typography>
          </Box>
        </Paper>

        {/* Key Metrics */}
        <Box sx={{ display: 'flex', gap: 3, mb: 5 }}>
          <Box sx={{ flex: 1 }}>
            <Card sx={{ 
              border: '1px solid #e1e4ea',
              borderRadius: 2,
              boxShadow: 'none',
              height: '100%'
            }}>
              <CardContent sx={{ p: 3 }}>
                <Typography sx={{ 
                  color: '#99a0ae', 
                  fontSize: 14,
                  fontWeight: 500,
                  mb: 2
                }}>
                  Total Sequences Submitted
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <Typography sx={{ 
                    color: '#222530', 
                    fontSize: 24,
                    fontWeight: 700
                  }}>
                    12,458,901
                  </Typography>
                  <Chip
                    label="+1.2M"
                    size="small"
                    sx={{
                      bgcolor: '#00a63e',
                      color: 'white',
                      fontSize: 12,
                      fontWeight: 600,
                      height: 20
                    }}
                  />
                </Box>
                <Typography sx={{ 
                  color: '#99a0ae', 
                  fontSize: 12,
                  fontWeight: 500
                }}>
                  Last 30 Days
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Card sx={{ 
              border: '1px solid #e1e4ea',
              borderRadius: 2,
              boxShadow: 'none',
              height: '100%'
            }}>
              <CardContent sx={{ p: 3 }}>
                <Typography sx={{ 
                  color: '#99a0ae', 
                  fontSize: 14,
                  fontWeight: 500,
                  mb: 2
                }}>
                  Active Subtypes Identified
                </Typography>
                <Typography sx={{ 
                  color: '#222530', 
                  fontSize: 24,
                  fontWeight: 700,
                  mb: 1
                }}>
                  4
                </Typography>
                <Typography sx={{ 
                  color: '#99a0ae', 
                  fontSize: 12,
                  fontWeight: 500
                }}>
                  (H1, H3, B/Victoria, B/Yamagata) | Dominant: H3 (45%)
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Card sx={{ 
              border: '1px solid #e1e4ea',
              borderRadius: 2,
              boxShadow: 'none',
              height: '100%'
            }}>
              <CardContent sx={{ p: 3 }}>
                <Typography sx={{ 
                  color: '#99a0ae', 
                  fontSize: 14,
                  fontWeight: 500,
                  mb: 2
                }}>
                  Total Clades Tracked
                </Typography>
                <Typography sx={{ 
                  color: '#222530', 
                  fontSize: 24,
                  fontWeight: 700,
                  mb: 1
                }}>
                  187
                </Typography>
                <Typography sx={{ 
                  color: '#99a0ae', 
                  fontSize: 12,
                  fontWeight: 500
                }}>
                  5 Fastest Growing This Week
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Card sx={{ 
              border: '1px solid #e1e4ea',
              borderRadius: 2,
              boxShadow: 'none',
              height: '100%'
            }}>
              <CardContent sx={{ p: 3 }}>
                <Typography sx={{ 
                  color: '#99a0ae', 
                  fontSize: 14,
                  fontWeight: 500,
                  mb: 2
                }}>
                  Emerging Variants Detected
                </Typography>
                <Typography sx={{ 
                  color: '#222530', 
                  fontSize: 24,
                  fontWeight: 700,
                  mb: 1
                }}>
                  12
                </Typography>
                <Typography sx={{ 
                  color: '#99a0ae', 
                  fontSize: 12,
                  fontWeight: 500
                }}>
                  3 New in Last 7 Days
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* Chart Section */}
        <Box sx={{ mb: 5 }}>
          <Card sx={{ 
            border: '1px solid #e1e4ea',
            borderRadius: 2,
            boxShadow: 'none'
          }}>
            <Box sx={{ 
              bgcolor: '#fcfcfd', 
              borderBottom: '1px solid #e1e4ea',
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              p: 2
            }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{ 
                  color: '#525866', 
                  fontSize: 14,
                  fontWeight: 600
                }}>
                  Influenza Variant Progression Over Time
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton size="small">
                    <Comment sx={{ fontSize: 16 }} />
                  </IconButton>
                  <Button
                    variant="outlined"
                    startIcon={<Add />}
                    size="small"
                    sx={{
                      borderColor: '#e1e4ea',
                      color: '#525866',
                      textTransform: 'none',
                      fontSize: 14,
                      fontWeight: 500,
                      px: 2,
                      py: 0.5
                    }}
                  >
                    Add to watchlist
                  </Button>
                  <Button
                    variant="outlined"
                    endIcon={<KeyboardArrowDown />}
                    size="small"
                    sx={{
                      borderColor: '#e1e4ea',
                      color: '#525866',
                      textTransform: 'none',
                      fontSize: 14,
                      fontWeight: 500,
                      px: 2,
                      py: 0.5
                    }}
                    onClick={handleChartTop5Click}
                  >
                    {selectedChartTop5}
                  </Button>
                  <Button
                    variant="outlined"
                    endIcon={<KeyboardArrowDown />}
                    size="small"
                    sx={{
                      borderColor: '#e1e4ea',
                      color: '#525866',
                      textTransform: 'none',
                      fontSize: 14,
                      fontWeight: 500,
                      px: 2,
                      py: 0.5
                    }}
                    onClick={handleChartSubtypesClick}
                  >
                    {selectedChartSubtypes}
                  </Button>
                </Box>
              </Box>
            </Box>
            
            <Box sx={{ p: 2 }}>
              {/* Chart Legend */}
              <Box sx={{ display: 'flex', gap: 3, mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ width: 12, height: 12, bgcolor: '#2b7fff', borderRadius: 0.5 }} />
                  <Typography sx={{ color: '#717784', fontSize: 14, fontWeight: 500 }}>
                    H3N2
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ width: 12, height: 12, bgcolor: '#00d492', borderRadius: 0.5 }} />
                  <Typography sx={{ color: '#717784', fontSize: 14, fontWeight: 500 }}>
                    H1N1
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ width: 12, height: 12, bgcolor: '#c27aff', borderRadius: 0.5 }} />
                  <Typography sx={{ color: '#717784', fontSize: 14, fontWeight: 500 }}>
                    B/Victoria
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ width: 12, height: 12, bgcolor: '#ffdf20', borderRadius: 0.5 }} />
                  <Typography sx={{ color: '#717784', fontSize: 14, fontWeight: 500 }}>
                    B/Yamagata
                  </Typography>
                </Box>
              </Box>

              {/* Chart */}
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="month" 
                    stroke="#99a0ae"
                    fontSize={14}
                  />
                  <YAxis 
                    stroke="#99a0ae"
                    fontSize={14}
                    label={{ 
                      value: 'Relative Frequency (%)', 
                      angle: -90, 
                      position: 'insideLeft',
                      style: { textAnchor: 'middle', fill: '#99a0ae' }
                    }}
                  />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="h3n2" 
                    stroke="#2b7fff" 
                    strokeWidth={2}
                    name="H3N2"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="h1n1" 
                    stroke="#00d492" 
                    strokeWidth={2}
                    name="H1N1"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="bVictoria" 
                    stroke="#c27aff" 
                    strokeWidth={2}
                    name="B/Victoria"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="bYamagata" 
                    stroke="#ffdf20" 
                    strokeWidth={2}
                    name="B/Yamagata"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Card>

          {/* Chart Summary */}
          <Paper sx={{ 
            bgcolor: '#fcfcfd', 
            border: '1px solid #eceff3',
            borderRadius: 3,
            p: 2,
            mt: 2,
            boxShadow: 'none'
          }}>
            <Typography sx={{ 
              color: '#99a0ae', 
              fontSize: 14,
              fontWeight: 600,
              mb: 2
            }}>
              Summary Section
            </Typography>
            <Box sx={{ display: 'flex', gap: 4 }}>
              <Typography sx={{ 
                color: '#525866', 
                fontSize: 14,
                fontWeight: 500
              }}>
                • H3N1 (+48%)
              </Typography>
              <Typography sx={{ 
                color: '#525866', 
                fontSize: 14,
                fontWeight: 500
              }}>
                • H1N1 (+48%)
              </Typography>
              <Typography sx={{ 
                color: '#525866', 
                fontSize: 14,
                fontWeight: 500
              }}>
                • B/Victoria (+48%)
              </Typography>
              <Typography sx={{ 
                color: '#525866', 
                fontSize: 14,
                fontWeight: 500
              }}>
                • B/Yamagata (+48%)
              </Typography>
            </Box>
          </Paper>
        </Box>

        {/* Map Section */}
        <Box>
          <Card sx={{ 
            border: '1px solid #e1e4ea',
            borderRadius: 2,
            boxShadow: 'none',
            mb: 2
          }}>
            <Box sx={{ 
              bgcolor: '#fcfcfd', 
              borderBottom: '1px solid #e1e4ea',
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              p: 2
            }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{ 
                  color: '#525866', 
                  fontSize: 14,
                  fontWeight: 600
                }}>
                  Global Influenza Activity by Region
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton size="small">
                    <Comment sx={{ fontSize: 16 }} />
                  </IconButton>
                  <Button
                    variant="outlined"
                    startIcon={<Add />}
                    size="small"
                    sx={{
                      borderColor: '#e1e4ea',
                      color: '#525866',
                      textTransform: 'none',
                      fontSize: 14,
                      fontWeight: 500,
                      px: 2,
                      py: 0.5
                    }}
                  >
                    Add to watchlist
                  </Button>
                  <Button
                    variant="outlined"
                    endIcon={<KeyboardArrowDown />}
                    size="small"
                    sx={{
                      borderColor: '#e1e4ea',
                      color: '#525866',
                      textTransform: 'none',
                      fontSize: 14,
                      fontWeight: 500,
                      px: 2,
                      py: 0.5
                    }}
                    onClick={handleMapTop5Click}
                  >
                    {selectedMapTop5}
                  </Button>
                  <Button
                    variant="outlined"
                    endIcon={<KeyboardArrowDown />}
                    size="small"
                    sx={{
                      borderColor: '#e1e4ea',
                      color: '#525866',
                      textTransform: 'none',
                      fontSize: 14,
                      fontWeight: 500,
                      px: 2,
                      py: 0.5
                    }}
                    onClick={handleMapSubtypesClick}
                  >
                    {selectedMapSubtypes}
                  </Button>
                </Box>
              </Box>
            </Box>
            
            <Box sx={{ p: 2, height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <WorldMap />
            </Box>
          </Card>

          {/* Map Summary */}
          <Paper sx={{ 
            bgcolor: '#fcfcfd', 
            border: '1px solid #eceff3',
            borderRadius: 3,
            p: 2,
            boxShadow: 'none'
          }}>
            <Typography sx={{ 
              color: '#99a0ae', 
              fontSize: 14,
              fontWeight: 600,
              mb: 2
            }}>
              Summary Section
            </Typography>
            <Box sx={{ display: 'flex', gap: 4 }}>
              <Typography sx={{ 
                color: '#525866', 
                fontSize: 14,
                fontWeight: 500
              }}>
                • India - Clade 3C.2a.1b.2a (+48%)
              </Typography>
              <Typography sx={{ 
                color: '#525866', 
                fontSize: 14,
                fontWeight: 500
              }}>
                • India - Clade 3C.2a.1b.2a (+48%)
              </Typography>
              <Typography sx={{ 
                color: '#525866', 
                fontSize: 14,
                fontWeight: 500
              }}>
                • India - Clade 3C.2a.1b.2a (+48%)
              </Typography>
              <Typography sx={{ 
                color: '#525866', 
                fontSize: 14,
                fontWeight: 500
              }}>
                • India - Clade 3C.2a.1b.2a (+48%)
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Container>

      {/* Date Range Filter Menu */}
      <Menu
        anchorEl={dateRangeAnchor}
        open={Boolean(dateRangeAnchor)}
        onClose={handleDateRangeClose}
      >
        <MenuItem onClick={() => handleDateRangeSelect('Last 7 Days')}>Last 7 Days</MenuItem>
        <MenuItem onClick={() => handleDateRangeSelect('Last 30 Days')}>Last 30 Days</MenuItem>
        <MenuItem onClick={() => handleDateRangeSelect('Last 90 Days')}>Last 90 Days</MenuItem>
        <MenuItem onClick={() => handleDateRangeSelect('Last Year')}>Last Year</MenuItem>
      </Menu>

      {/* Region Filter Menu */}
      <Menu
        anchorEl={regionAnchor}
        open={Boolean(regionAnchor)}
        onClose={handleRegionClose}
      >
        <MenuItem onClick={() => handleRegionSelect('All Regions')}>All Regions</MenuItem>
        <MenuItem onClick={() => handleRegionSelect('North America')}>North America</MenuItem>
        <MenuItem onClick={() => handleRegionSelect('Europe')}>Europe</MenuItem>
        <MenuItem onClick={() => handleRegionSelect('Asia')}>Asia</MenuItem>
        <MenuItem onClick={() => handleRegionSelect('Africa')}>Africa</MenuItem>
        <MenuItem onClick={() => handleRegionSelect('Oceania')}>Oceania</MenuItem>
      </Menu>

      {/* Impact Filters Menu */}
      <Menu
        anchorEl={impactFiltersAnchor}
        open={Boolean(impactFiltersAnchor)}
        onClose={handleImpactFiltersClose}
      >
        <MenuItem onClick={() => handleImpactFilterSelect('All Impacts')}>All Impacts</MenuItem>
        <MenuItem onClick={() => handleImpactFilterSelect('Growth Rate')}>Growth Rate</MenuItem>
        <MenuItem onClick={() => handleImpactFilterSelect('Spike Mutation')}>Spike Mutation</MenuItem>
        <MenuItem onClick={() => handleImpactFilterSelect('New Variants')}>New Variants</MenuItem>
      </Menu>

      {/* Chart Top 5 Filter Menu */}
      <Menu
        anchorEl={chartTop5Anchor}
        open={Boolean(chartTop5Anchor)}
        onClose={handleChartTop5Close}
      >
        <MenuItem onClick={() => handleChartTop5Select('Top 5 by Growth Rate')}>Top 5 by Growth Rate</MenuItem>
        <MenuItem onClick={() => handleChartTop5Select('Top 5 by Spike Mutation')}>Top 5 by Spike Mutation</MenuItem>
        <MenuItem onClick={() => handleChartTop5Select('Top 5 by New Variants')}>Top 5 by New Variants</MenuItem>
      </Menu>

      {/* Chart Subtypes Filter Menu */}
      <Menu
        anchorEl={chartSubtypesAnchor}
        open={Boolean(chartSubtypesAnchor)}
        onClose={handleChartSubtypesClose}
      >
        <MenuItem onClick={() => handleChartSubtypesSelect('All Subtypes')}>All Subtypes</MenuItem>
        <MenuItem onClick={() => handleChartSubtypesSelect('H1N1')}>H1N1</MenuItem>
        <MenuItem onClick={() => handleChartSubtypesSelect('H3N2')}>H3N2</MenuItem>
        <MenuItem onClick={() => handleChartSubtypesSelect('B/Victoria')}>B/Victoria</MenuItem>
        <MenuItem onClick={() => handleChartSubtypesSelect('B/Yamagata')}>B/Yamagata</MenuItem>
      </Menu>

      {/* Map Top 5 Filter Menu */}
      <Menu
        anchorEl={mapTop5Anchor}
        open={Boolean(mapTop5Anchor)}
        onClose={handleMapTop5Close}
      >
        <MenuItem onClick={() => handleMapTop5Select('Top 5 by Growth Rate')}>Top 5 by Growth Rate</MenuItem>
        <MenuItem onClick={() => handleMapTop5Select('Top 5 by Spike Mutation')}>Top 5 by Spike Mutation</MenuItem>
        <MenuItem onClick={() => handleMapTop5Select('Top 5 by New Variants')}>Top 5 by New Variants</MenuItem>
      </Menu>

      {/* Map Subtypes Filter Menu */}
      <Menu
        anchorEl={mapSubtypesAnchor}
        open={Boolean(mapSubtypesAnchor)}
        onClose={handleMapSubtypesClose}
      >
        <MenuItem onClick={() => handleMapSubtypesSelect('All Subtypes')}>All Subtypes</MenuItem>
        <MenuItem onClick={() => handleMapSubtypesSelect('H1N1')}>H1N1</MenuItem>
        <MenuItem onClick={() => handleMapSubtypesSelect('H3N2')}>H3N2</MenuItem>
        <MenuItem onClick={() => handleMapSubtypesSelect('B/Victoria')}>B/Victoria</MenuItem>
        <MenuItem onClick={() => handleMapSubtypesSelect('B/Yamagata')}>B/Yamagata</MenuItem>
      </Menu>
    </Box>
  );
};

export default GisaidOverview; 