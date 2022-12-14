<?php

namespace App\Controller;

use http\Env\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractController
{
    #[Route('/profil', name: 'app_dashboard')]
    public function show(): Response
    {
        return $this->render('dashboard/dashboard.html.twig');
    }
}
